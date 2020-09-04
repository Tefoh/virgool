<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookmarkedPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = $request->user()
            ->bookmarks()
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(10);

        return response([
            'posts' => $posts,
            'user' => $request->user()->loadCount('bookmarks')
        ], 200);
    }
}
