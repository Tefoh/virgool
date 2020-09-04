<?php

use Illuminate\Support\Facades\Route;

Route::get('/link/{post:short_link}', 'ShortLinkPostController');

Route::fallback(function () {
    return view('home');
});

Route::get('/login', function () {
    return view('home');
})->name('login');

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/register', 'Auth\RegisterController@register')->name('register');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::get('/reset/password/{token}', function () {
    return view('home');
})->name('password.reset');
