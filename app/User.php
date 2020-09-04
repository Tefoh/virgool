<?php

namespace App;

use App\Notifications\VerifyEmail;
use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, OrderableTrait, FieldsHeaderTrait, SearchableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile',
        'bio',
        'username',
        'email_on_follow',
        'email_on_like',
        'email_on_reply',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'profile_src', 'image'
    ];

    public static $FIELDS = [
        'image' => 'پروفایل',
        'name' => 'نام',
        'email' => 'ایمیل',
        'username' => 'نام کاربری',
        'posts_count' => 'تعداد نوشته ها',
        'created_at' => 'تاریخ ساخت',
        'actions' => '',
        'link' => ''
    ];

    public static $SORTABLE_FIELDS = [
        'name', 'username', 'email', 'bio', 'created_at', 'posts_count'
    ];

    public static $searchableFields = [
        'name', 'username', 'email', 'bio'
    ];

    public static function booted()
    {
        static::deleting(function ($user) {
            $user->drafts()->delete();
        });
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    public function getAllRolesNameAttribute()
    {
        return $this->roles->pluck('name');
    }

    public function getAllRolesIdAttribute()
    {
        return $this->roles->pluck('id');
    }

    public function getProfileSrcAttribute()
    {
        $profileImage = Str::beforeLast($this->profile, '?');
        return $this->profile && File::exists(public_path('/profiles/' . $profileImage))
            ?  '/profiles/' . $this->profile
            : '/images/avatar.png';
    }

    public function getImageAttribute()
    {
        return $this->profile_src;
    }

    public function getIsFollowsAttribute()
    {
        return $this->followers()
            ->whereUserId(optional(request()->user())->id)
            ->exists();
    }

    public function hasRole($roles)
    {
        foreach ($roles as $role) {
            if ($this->roles()->pluck('name')->contains($role)) return true;
        }
        return false;
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function drafts()
    {
        return $this->hasMany(Draft::class);
    }

    public function follows()
    {
        return $this->belongsToMany(
            User::class,
            'follows',
            'user_id',
            'following_id'
        );
    }

    public function followers()
    {
        return $this->belongsToMany(
            User::class,
            'follows',
            'following_id',
            'user_id'
        );
    }

    public function likes()
    {
        return $this->belongsToMany(Post::class, 'likes');
    }

    public function bookmarks()
    {
        return $this->belongsToMany(Post::class, 'bookmarks');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
