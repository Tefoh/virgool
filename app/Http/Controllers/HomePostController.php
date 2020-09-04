<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class HomePostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'categories'])
            ->withCount('likes')
            ->orderByDesc('created_at')
            ->simplePaginate(10);

        return response([
            'posts' => $posts
        ], 200);
    }
}
