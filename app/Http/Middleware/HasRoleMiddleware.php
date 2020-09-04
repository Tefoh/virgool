<?php

namespace App\Http\Middleware;

use Closure;

class HasRoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        $role = explode('|', $role);
        abort_unless($request->user()->hasRole($role), 403);

        return $next($request);
    }
}
