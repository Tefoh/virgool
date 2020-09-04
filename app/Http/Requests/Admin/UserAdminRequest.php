<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserAdminRequest extends FormRequest
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
        if ($this->getMethod() === 'patch' || $this->getMethod() === 'PATCH') {
            return [
                'name' => ['required', 'max:255'],
                'email' => ['required', 'max:255', 'email', 'unique:users,email,' . $this->id],
                'username' => ['required', 'max:255', 'unique:users,username,' . $this->id],
                'password' => ['nullable'],
            ];
        }
        return [
            'name' => ['required', 'max:255'],
            'email' => ['required', 'max:255', 'email', 'unique:users'],
            'username' => ['required', 'max:255', 'unique:users'],
            'password' => ['required'],
        ];
    }
}
