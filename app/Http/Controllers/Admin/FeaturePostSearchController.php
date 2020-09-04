<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class FeaturePostSearchController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'data' => Post::where(function ($query) use ($request) {
                                return $query->where('title', 'LIKE', "%{$request->q}%")
                                    ->orWhere('content', 'LIKE', "%{$request->q}%");
                            })
                            ->doesntHave('featurePost')
                            ->take(10)
                            ->get()
        ], 200);
    }
}
