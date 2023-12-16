<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function get() {
        $posts = Post::all();
        return response([
            'status' => true,
            'posts' => $posts
        ],200);
    }

    public function getOne($id) {
       $data = Post::where('id',$id) -> get();

       return response([
           'status' => true,
           'data' => $data
       ], 200);
    }

    public function create(Request $req) {
        $validator = Validator::make($req -> all(),[
            'title' => ['required'],
            'username' => ['required', 'min:1'],
            'content' => ['required', 'min:1']
        ]);

        if($validator -> fails()) {
            $errors = $validator -> errors();
            return response([
                'status' => false,
                'errors' => $errors
            ], 403);
        }

        $newPost = Post::create([
            'title' => $req -> get("title"),
            'username' => $req -> get("username"),
            'content' => $req -> get("content")
        ]);

        return response([
            'status' => true,
            'message' => "Post created successfully"
        ], 200);
    }
}
