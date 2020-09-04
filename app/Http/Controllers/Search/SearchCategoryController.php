<?php

namespace App\Http\Controllers\Search;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchCategoryController extends Controller
{
    public function index(Request $request)
    {
        return response([
            'categories' => Category::where('title', 'LIKE', "%{$request->q}%")
                                    ->get()
        ], 200);
    }
}
