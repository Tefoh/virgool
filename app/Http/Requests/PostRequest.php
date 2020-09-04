<?php

namespace App\Http\Requests;

use App\Post;
use App\Services\ImageService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $imageNameRule = $this->getMethod() === 'post' || $this->getMethod() === 'POST' ? 'required' : 'nullable';
        return [
            'title' => ['required'],
            'content' => ['required'],
            'description' => ['nullable'],
            'image' => ['required'],
            'image_name' => [$imageNameRule],
            'categories' => ['required', 'array'],
            'categories.*' => ['required'],
        ];
    }

    public function passedValidation()
    {
        $imageService = app(ImageService::class);
        $data = $this->all();

        $description = Str::words($data['description'], 50, '...')
            ?? Str::words(strip_tags($data['content']), 50, '...');

        $image = isset($data['image_name']) ? $imageService->uploadPostImageBase64(
            $data['image'],
            $data['image_name'],
            Post::getImageDirectory()
        ) : '';

        $min_read = ceil(str_word_count(strip_tags($data['content'])) / 250);

        return $this->merge([
            'user_id' => $this->user()->id,
            'description' => $description,
            'image' => $image,
            'min_read' => $min_read,
        ]);
    }
}
