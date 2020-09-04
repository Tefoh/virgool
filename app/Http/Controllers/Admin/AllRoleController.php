<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Role;
use Illuminate\Http\Request;

class AllRoleController extends Controller
{
    public function index()
    {
        return response(Role::all(), 200);
    }
}
