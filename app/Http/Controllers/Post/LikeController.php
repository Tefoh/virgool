<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Notifications\PostLikedNotification;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class LikeController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $post->likes()->sync(
            $request->user()->id,
            false
        );

        $post->user->notify(
            new PostLikedNotification($post)
        );

        Redis::zincrby('trending_posts', 5, json_encode([
            'title' => $post->title,
            'slug' => $post->slug,
            'user_name' => $post->user->name,
            'user_profile_src' => $post->user->profile_src,
        ]));

        return response([
            'data' => 'ok'
        ], 200);
    }

    public function destroy(Request $request, Post $post)
    {
        $post->likes()->detach(
            $request->user()->id
        );

        Redis::zincrby('trending_posts', -5, json_encode([
            'title' => $post->title,
            'slug' => $post->slug,
            'user_name' => $post->user->name,
            'user_profile_src' => $post->user->profile_src,
        ]));

        return response([
            'data' => 'ok'
        ], 200);
    }
}
