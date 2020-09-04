<?php

namespace App;

use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    use OrderableTrait, SearchableTrait, FieldsHeaderTrait;

    protected $guarded = [];

    public static $FIELDS = [
        'title' => 'عنوان',
        'user.name' => 'اسم نویسنده',
        'created_at' => 'تاریخ ساخت'
    ];

    public static $SORTABLE_FIELDS = [
        'title', 'user.name', 'created_at'
    ];

    public static $searchableFields = [
        'title', 'content', 'user.name'
    ];

    public function getRouteKeyName()
    {
        return 'link';
    }

    public function scopeOrderUserByName($query, $orderType = 'asc')
    {
        return $query->orderBy(User::select('name')
            ->whereColumn(
                'users.id', 'drafts.user_id'),
            $orderType
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
