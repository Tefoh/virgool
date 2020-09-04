<?php

namespace App;

use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use OrderableTrait, SearchableTrait, FieldsHeaderTrait;

    protected $guarded = [];

    protected $with = ['replies', 'user'];

    public static $FIELDS = [
        'content' => 'نظر',
        'post.title' => 'عنوان نوشته',
        'user.name' => 'نام کاربر',
        'parent.content' => 'پاسخ',
        'created_at' => 'تاریخ ساخت',
        'link' => ''
    ];

    public static $SORTABLE_FIELDS = [
        'content',
        'post.title',
        'user.name',
        'parent.content',
        'created_at'
    ];

    public static $searchableFields = [
        'content',
        'post.title',
        'user.name',
        'parent.content',
    ];

    public static function booted()
    {
        static::saving(function($comment) {
            $comment->user_id = request()->user()->id;
        });
    }

    public function scopeOrderPostByTitle($query, $orderType = 'asc')
    {
        return $query->orderBy(Post::select('title')
            ->whereColumn('comments.post_id', 'posts.id'),
            $orderType
        );
    }

    public function scopeOrderUserByName($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('name')
            ->whereColumn('comments.user_id', 'users.id'),
            $orderType
        );
    }

    public function scopeOrderParentByContent($query, $orderType = 'asc')
    {
        return $query->orderBy(Comment::select('title')
            ->whereColumn('comments.comment_id', 'comments.id'),
            $orderType
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function parent()
    {
        return $this->belongsTo(Comment::class, 'comment_id');
    }

    public function replies()
    {
        return $this->hasMany(Comment::class);
    }
}
