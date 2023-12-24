<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function get(int $postId) {
        $comments = Comment::where('post_id',$postId) -> get();

        return response([
            'status' => true,
            'comments' => $comments
        ], 200);
    }
}
