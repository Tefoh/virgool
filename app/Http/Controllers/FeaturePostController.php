<?php

namespace App\Http\Controllers;

use App\FeaturePost;
use Illuminate\Http\Request;

class FeaturePostController extends Controller
{
    public function index()
    {
        return response([
            'data' => FeaturePost::with('post.user')
                                ->inRandomOrder()
                                ->take(4)
                                ->get()
        ], 200);
    }
}
