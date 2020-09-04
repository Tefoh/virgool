<?php


namespace App\Traits;


use Illuminate\Support\Str;

trait OrderableTrait
{
    public function scopeSortFromRequest($query, $orderBy = 'sort_by', $orderType = 'sort_type')
    {
        $sort_by = collect(static::$SORTABLE_FIELDS)->contains(request()->{$orderBy})
            ? request()->{$orderBy}
            : 'id';
        $sort_type = request()->{$orderType} === 'asc' ? 'asc' : 'desc';

        if (Str::of($sort_by)->contains('.')) {
            $relation = Str::of($sort_by)->beforeLast('.')->ucfirst();
            $fieldName = Str::of($sort_by)->afterLast('.')->ucfirst();

            $methodName = "order{$relation}By{$fieldName}";

            return $query->{$methodName}($sort_type);
        }

        return $query->orderBy($sort_by, $sort_type);
    }
}
