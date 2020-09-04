<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserAdminRequest;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page ?? 10;

        return response([
            'items' => User::withCount('posts')
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($per_page),
            'headers' => User::getHeaderFields()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserAdminRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        event(new Registered(
            $user = User::create($data)
        ));

        $user->roles()->sync($request->roles);

        return response([
            'data' => 'ok'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return User
     */
    public function show(User $user)
    {
        return $user->append('all_roles_id');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserAdminRequest $request
     * @param User $user
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(UserAdminRequest $request, User $user)
    {
        $data = $request->validated();
        if (filled($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        $user->roles()->sync($request->roles);

        return response([
            'data' => 'ok'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);

        User::destroy($request->items);

        return response([
            'data' => 'ok'
        ], 200);
    }
}
