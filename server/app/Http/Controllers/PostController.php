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

    public function getOne(Request $request, $id) {
       $validator = Validator::make($request -> all(),[
           'id' => "required"
       ]);

       if($validator -> fails()) {
           return response([
               'status' => false,
               'errors' => $validator -> errors()
           ],403);
       }

       $data = Post::where('id',$id) -> get();

       return response([
           'status' => true,
           'data' => $data
       ], 200);
    }
}
