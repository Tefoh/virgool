<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class NavbarCategoryController extends Controller
{
    public function index()
    {
        return response([
            'data' => Category::inRandomOrder()->take(5)->get()
        ], 200);
    }
}
