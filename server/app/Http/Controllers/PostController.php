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

    public function getLatest(int $page = 0) {
        $data = Post::skip($page * 10) -> take(10) -> orderBy('id', 'desc') -> get();

        return response([
            'status' => true,
            'data' => $data
        ], 200);
    }

    public function store(Request $req) {
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
            'status' => true
        ], 200);
    }
}
