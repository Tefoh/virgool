<?php

namespace App\Http\Controllers\Admin;

use App\FeaturePost;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class FeaturePostController extends Controller
{
    public function index()
    {
        return response([
            'posts' => FeaturePost::with('post.user')->get()
        ], 200);
    }

    public function store(Post $post)
    {
        $post->featurePost()->firstOrCreate([]);

        return response([
            'data' => 'ok'
        ], 200);
    }

    public function destroy(Post $post)
    {
        $post->featurePost()->delete();

        return response([
            'data' => 'ok'
        ], 200);
    }
}
