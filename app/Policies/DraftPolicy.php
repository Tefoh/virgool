<?php

namespace App\Policies;

use App\Draft;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DraftPolicy
{
    use HandlesAuthorization;

    public function show(User $user, Draft $draft)
    {
        return $user->id === $draft->user_id;
    }
}
