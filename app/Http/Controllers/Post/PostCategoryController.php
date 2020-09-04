<?php

namespace App\Http\Controllers\Post;

use App\Category;
use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    public function index(Category $category)
    {
        $posts = $category->posts()
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(10);

        return response([
            'posts' => $posts,
            'category' => $category->loadCount('posts')
        ], 200);
    }
}
