<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function get(int $postId)
    {
        $comments = Comment::where('post_id', $postId)->get();

        return response([
            'status' => true,
            'comments' => $comments
        ], 200);
    }

    public function edit(int $id, Request $request) {
        $validation = Validator::make($request -> all(),[
            'username' => 'required',
            'text' => 'required'
        ]);

        if($validation -> fails()) {
            return response([
                'status' => false,
                'errors' => $validation -> errors()
            ], 403);
        }

        Comment::where('id', $id)
            -> where('username', $request -> get('username'))
            -> update([
                'text' => $request -> get('text')
            ]);

        return response([
            'status' => true,
            'message' => 'Comment edited'
        ], 200);
    }

    public function store(Request $request)
    {
        $validation = Validator::make($request -> all(),[
            'username' => 'required',
            'post_id' => 'required',
            'text' => 'required'
        ]);

        if($validation -> fails()) {
            return response([
                'status' => false,
                'errors' => $validation -> errors()
            ], 403);
        }

        $newComment = Comment::create([
            'username' => $request -> get('username'),
            'post_id' => $request -> get('post_id'),
            'text' => $request -> get('text')
        ]);

        return response([
            'status' => true,
            'message' => 'Comment Created'
        ], 200);
    }

    public function destroy(int $id, Request $req) {
        $validation = Validator::make($req -> all(),[
            'username' => 'required'
        ]);

        if($validation -> fails()) {
            return response([
                'status' => false,
                'errors' => $validation -> errors()
            ], 403);
        }

        Comment::where('id', $id)
            -> where('username', $req -> get('username'))
            -> delete();

        return response([
            'status' => true,
            'message' => 'Comment deleted'
        ], 200);
    }
}
