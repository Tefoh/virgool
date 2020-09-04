<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Post::with('user')
                ->withCount(['comments', 'likes'])
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
            'headers' => Post::getHeaderFields(),
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

        Post::destroy($request->items);

        return response([
            'data' => 'ok'
        ], 200);
    }
}
