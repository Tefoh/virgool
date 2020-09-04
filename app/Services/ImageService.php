<?php


namespace App\Services;


use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImageService
{
    /**
     * @param $image
     * @param string $image_name
     * @param $image_dir
     * @return string
     */
    public function uploadImageBase64($image, string $image_name, $image_dir): string
    {
        $file_name = $this->getFileNameBase64($image_name);
        $path = $image_dir . $file_name;

        Image::make($image)
            ->fit(100)
            ->save($path);

        return $file_name . '?' . Str::random(16);
    }

    public function uploadPostImageBase64($image, string $image_name, $image_dir): string
    {
        $image_name = Str::random(10) . '-' . $image_name;
        $path = $image_dir . $image_name;

        Image::make($image)
            ->fit(100)
            ->save(public_path($path));

        return $image_name;
    }

    /**
     * @param string $image_name
     * @return string
     */
    public function getFileNameBase64(string $image_name): string
    {
        return (optional(request()->user())->username ?? Str::random(10)) . '.' . Str::afterLast($image_name, '.');
    }

    /**
     * @param UploadedFile $imageFile
     * @param $file_dir
     * @param null $file_name
     * @return string
     */
    public function uploadImageFile(UploadedFile $imageFile, $file_dir, $file_name = null): string
    {
        $image_name = $file_name ?? $this->getFileName($imageFile);
        $image_dir = $file_dir;

        $imageFile->move($image_dir, $image_name);
        return $image_name;
    }

    public function getFileName($imageFile)
    {
        return Str::random(15) . '.' . $imageFile->getClientOriginalExtension();
    }
}
