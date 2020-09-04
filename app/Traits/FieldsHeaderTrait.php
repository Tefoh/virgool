<?php


namespace App\Traits;


trait FieldsHeaderTrait
{
    public static function getHeaderFields()
    {
        return collect(static::$FIELDS)->transform(function ($item, $key) {
            $sortable = $key === 'link' || $key === 'image' || $key === 'actions' ? false : true;
            return ['text' => $item, 'value' => $key, 'sortable' => $sortable];
        })->values()->all();
    }
}
