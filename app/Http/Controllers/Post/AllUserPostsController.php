<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllUserPostsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return response([
            'data' => $request->user()->posts->map(function ($post) {
                return collect($post)->merge([
                    'updated_at' => verta($post->updated_at)->formatDifference()
                ]);
            })
        ], 200);
    }
}
