<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

Route::get('/feature-posts', 'FeaturePostController@index');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    Route::patch('/profile', 'UpdateProfileController@update')
        ->name('profile.update');

    Route::post('/upload-post-image', 'Post\UploadPostImageController')
        ->name('upload_post_image');


    Route::get('/posts/{post:slug}/edit', 'Post\PostController@show')
        ->name('post.show');

    Route::patch('/posts/{post:slug}/edit', 'Post\PostController@edit')
        ->name('post.edit');

    Route::patch('/posts/{post:slug}', 'Post\PostController@update')
        ->name('post.update');
    Route::delete('/posts/{post:slug}', 'Post\PostController@destroy')
        ->name('post.destroy');

    Route::post('/posts/create', 'Draft\DraftController@store')
        ->name('draft.store');

    Route::get('/drafts/{draft}', 'Draft\DraftController@show')
        ->name('draft.show');
    Route::patch('/drafts/{draft}', 'Draft\DraftController@update')
        ->name('draft.update');
    Route::delete('/drafts/{draft}', 'Draft\DraftController@destroy')
        ->name('draft.destroy');

    Route::post('/posts', 'Post\PostController@store');

    Route::get('posts/all-posts', 'Post\AllUserPostsController');
    Route::get('posts/all-drafts', 'Post\AllUserDraftsController');

    Route::post('/comments/{post:slug}', 'Comment\CommentController@store')
        ->name('comment.store');
    Route::patch('/comments/{comment}', 'Comment\CommentController@update')
        ->name('comment.update');
    Route::delete('/comments/{comment}', 'Comment\CommentController@destroy')
        ->name('comment.destroy');

    Route::post('/replies/{post:slug}', 'Comment\ReplyController@store')
        ->name('reply.store');

    Route::post('/bookmarks/{post:slug}', 'Post\BookmarkController@store')
        ->name('bookmark.store');
    Route::delete('/bookmarks/{post:slug}', 'Post\BookmarkController@destroy')
        ->name('bookmark.destroy');

    Route::post('/likes/{post:slug}', 'Post\LikeController@store')
        ->name('like.store');
    Route::delete('/likes/{post:slug}', 'Post\LikeController@destroy')
        ->name('like.destroy');

    Route::post('/follows/{user:username}', 'User\FollowController')
        ->name('follow');

    Route::get('/notifications', 'User\NotificationsController@index')
        ->name('notifications');
    Route::patch('/notifications/{notification}', 'User\NotificationsController@update')
        ->name('notifications.update');

    Route::get('/liked-posts', 'User\LikedPostController@index');
    Route::get('/bookmarked-posts', 'User\BookmarkedPostController@index');

    Route::get('/following-posts', 'Post\FollowingPostController@index');
});

Route::get('/posts/category/{category:slug}', 'Post\PostCategoryController@index');

Route::get('/posts/{post:slug}', 'Post\ShowPostController')
    ->name('show-post');

Route::get('/navbar-categories', 'Category\NavbarCategoryController@index');
Route::get('/user-posts/{user:username}', 'User\UserPostController@index');

Route::get('/home', 'HomePostController@index');

Route::get('/trending-posts', 'Post\TrendingPostController@index');

Route::get('/search/posts', 'Search\SearchPostController@index');
Route::get('/search/users', 'Search\SearchUserController@index');
Route::get('/search/categories', 'Search\SearchCategoryController@index');

Route::prefix('admin')->namespace('Admin')->middleware(['auth:sanctum', 'has_role:admin|author'])->group(function () {
    Route::get('dashboard', 'DashboardController');

    Route::apiResource('users', 'UserController');
    Route::post('users/destroy', 'UserController@destroy');

    Route::get('posts', 'PostController@index');
    Route::post('posts/destroy', 'PostController@destroy');

    Route::get('drafts', 'DraftController@index');
    Route::post('drafts/destroy', 'DraftController@destroy');

    Route::apiResource('categories', 'CategoryController');
    Route::post('categories/destroy', 'CategoryController@destroy');

    Route::get('comments', 'CommentController@index');
    Route::post('comments/destroy', 'CommentController@destroy');

    Route::get('/feature-posts-search', 'FeaturePostSearchController@index');
    Route::get('/feature-posts', 'FeaturePostController@index');
    Route::post('/feature-post/{post:slug}', 'FeaturePostController@store');
    Route::delete('/feature-post/{post:slug}', 'FeaturePostController@destroy');

    Route::apiResource('roles', 'RoleController');
    Route::get('all-roles', 'AllRoleController@index');
});
