<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class FollowingPostController extends Controller
{
    public function index(Request $request)
    {
        $following_ids = $request->user()->follows->pluck('id');

        $posts = Post::with('user')
            ->whereIn('user_id', $following_ids)
            ->latest()
            ->take(3)
            ->get();

        return response([
            'posts' => $posts
        ], 200);
    }
}
