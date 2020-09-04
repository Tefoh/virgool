<?php

namespace App;

use App\Traits\FieldsHeaderTrait;
use App\Traits\OrderableTrait;
use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use OrderableTrait, SearchableTrait, FieldsHeaderTrait;

    protected $guarded = [];

    public static $FIELDS = [
        'name' => 'نام',
        'created_at' => 'تاریخ ساخت',
        'actions' => ''
    ];

    public static $SORTABLE_FIELDS = [
        'name', 'created_at'
    ];

    public static $searchableFields = [
        'name'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
