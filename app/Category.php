<?php

namespace App;

use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use Sluggable, OrderableTrait, SearchableTrait, FieldsHeaderTrait;

    protected $guarded = [];

    public static $FIELDS = [
        'title' => 'نام دسته بندی',
        'posts_count' => 'تعداد نوشته ها',
        'created_at' => 'تاریخ ساخت',
        'actions' => '',
        'link' => ''
    ];

    public static $SORTABLE_FIELDS = [
        'title', 'posts_count', 'created_at'
    ];

    public static $searchableFields = [
        'title'
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
