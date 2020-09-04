<?php

namespace App\Http\Controllers\Comment;

use App\Comment;
use App\Events\CommentCreatedEvent;
use App\Events\CommentDeletedEvent;
use App\Http\Controllers\Controller;
use App\Notifications\PostCommentNotification;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;

class CommentController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate(['content' => 'required']);

        $post->comments()->save(
            $comment = new Comment($request->only('content'))
        );

        $post->user->notify(
            new PostCommentNotification($post)
        );

        event(new CommentCreatedEvent(
            $comment->load(['user', 'post', 'replies', 'parent'])
        ));

        return response([
            'data' => $comment
        ], 200);
    }

    public function update(Request $request, Comment $comment)
    {
        $this->authorize('destroy', $comment);
        $request->validate(['content' => 'required']);

        $comment->update(
            $request->only('content')
        );

        return response([
            'data' => $comment->load(['user', 'post', 'replies', 'parent'])
        ], 200);
    }

    public function destroy(Comment $comment)
    {
        $this->authorize('destroy', $comment);

        Event::dispatch(new CommentDeletedEvent($comment));

        $comment->delete();

        return response([
            'data' => 'ok'
        ], 200);
    }
}
