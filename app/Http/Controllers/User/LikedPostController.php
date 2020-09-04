<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LikedPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = $request->user()
            ->likes()
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(10);

        return response([
            'posts' => $posts,
            'user' => $request->user()->loadCount('likes')
        ], 200);
    }
}
