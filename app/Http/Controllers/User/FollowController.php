<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Notifications\UserFollowNotification;
use App\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function __invoke(Request $request, User $user)
    {
        $request->user()
            ->follows()
            ->toggle([$user->id]);

        if ($user->is_follows) {
            $user->notify(
                new UserFollowNotification($request->user())
            );
        }

        return response([
            'data' => 'ok'
        ], 200);
    }
}
