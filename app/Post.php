<?php

namespace App;

use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use Sluggable, OrderableTrait, SearchableTrait, FieldsHeaderTrait;

    protected $guarded = [];

    protected $appends = [
        'is_bookmarked',
        'is_liked'
    ];

    public static $FIELDS = [
        'image' => 'عکس نوشته',
        'title' => 'عنوان',
        'user.name' => 'اسم کاربر',
        'comments_count' => 'تعداد نظرات',
        'likes_count' => 'تعداد لایک ها',
        'link' => '',
    ];

    public static $SORTABLE_FIELDS = [
        'title',
        'user.name',
        'comments_count',
        'likes_count',
        'created_at'
    ];

    public static $searchableFields = [
        'title',
        'content',
        'user.name'
    ];

    public static function booted()
    {
        static::saving(function ($post) {
            $post->short_link = Str::random(7);
        });
    }

    public static function getImageDirectory()
    {
        return '/images/posts/';
    }

    public function getCategoriesTitleAttribute()
    {
        return $this->categories->pluck('title');
    }

    public function getImageAttribute()
    {
        return '/images/posts/'.  $this->attributes['image'];
    }

    public static function getPublicDirectory()
    {
        return public_path() . static::getImageDirectory();
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function getIsBookmarkedAttribute()
    {
        return $this->bookmarks()
            ->where('user_id', optional(request()->user())->id)
            ->exists();
    }

    public function getIsLikedAttribute()
    {
        return $this->likes()
            ->whereUserId(optional(request()->user())->id)
            ->exists();
    }

    public function scopeOrderUserByName($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('name')
            ->whereColumn(
                'users.id', 'posts.user_id'),
                $orderType
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function parentComments()
    {
        return $this->comments()->whereNull('comment_id');
    }

    public function bookmarks()
    {
        return $this->belongsToMany(User::class, 'bookmarks');
    }

    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    public function featurePost()
    {
        return $this->hasOne(FeaturePost::class);
    }
}
