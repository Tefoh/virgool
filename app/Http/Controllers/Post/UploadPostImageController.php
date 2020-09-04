<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Post;
use Facades\App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadPostImageController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'file' => ['required', 'image']
        ]);


        $image_name = ImageService::uploadImageFile(
            $request->file('file'),
            Post::getPublicDirectory()
        );

        return response([
            'data' => Post::getImageDirectory() . $image_name
        ]);
    }
}
