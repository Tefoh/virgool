<?php

namespace App\Http\Controllers\Comment;

use App\Comment;
use App\Events\ReplyCreatedEvent;
use App\Http\Controllers\Controller;
use App\Notifications\CommentRepliedNotification;
use App\Notifications\PostCommentNotification;
use App\Post;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $request->validate([
            'content' => 'required',
            'comment_id' => 'required|exists:comments,id'
        ]);

        $post->comments()->save(
            $reply = new Comment($request->only(['content', 'comment_id']))
        );

        $post->user->notify(
            new PostCommentNotification($post)
        );
        Comment::find($request->comment_id)->user->notify(
            new CommentRepliedNotification($post)
        );

        event(new ReplyCreatedEvent(
            $reply->load(['user', 'post', 'replies', 'parent'])
        ));

        return response([
            'data' => $reply
        ], 200);
    }
}
