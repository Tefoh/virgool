<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class SearchPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::where('title', 'LIKE', "%{$request->q}%")
            ->orWhere('content', 'LIKE', "%{$request->q}%")
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(10);

        return response([
            'posts' => $posts
        ]);
    }
}
