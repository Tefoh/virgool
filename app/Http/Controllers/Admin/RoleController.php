<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'items' => Role::sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
            'headers' => Role::getHeaderFields(),
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|max:255']);

        Role::create($request->only('name'));

        return response([
            'data' => 'ok'
        ], 200);
    }

    public function show(Role $role)
    {
        return $role;
    }

    public function update(Request $request, Role $role)
    {
        $request->validate(['name' => 'required|max:255']);

        $role->update($request->only('name'));

        return response([
            'data' => 'ok'
        ], 200);
    }
}
