<?php

namespace App\Http\Requests;

use GrahamCampbell\SecurityCore\Security;
use Illuminate\Foundation\Http\FormRequest;

class DraftRequest extends FormRequest
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
        return [
            'title' => ['nullable', 'max:255'],
            'content' => ['nullable'],
        ];
    }

    public function validationData()
    {
        $data = $this->all();
        if ($data['content'])
            $data['content'] = Security::create()->clean($data['content']);

        return $data;
    }
}
