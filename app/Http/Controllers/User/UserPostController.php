<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserPostController extends Controller
{
    public function index(User $user)
    {
        $posts = $user->posts()
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(10);

        return response([
            'posts' => $posts,
            'user' => $user->loadCount('posts')->append('is_follows')
        ], 200);
    }
}
