<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function get(string $username) {
        $profile = Profile::where('username', $username) -> get();

        return response([
            'status' => true,
            'profile' => $profile
        ], 200);
    }

    public function edit(int $id,Request $req) {
        $validation = Validator::make($req -> all(), [
            'username' => 'required',
            'about' => 'required'
        ]);

        if($validation -> fails()) {
            return response([
                'status' => false,
                'message' => "Couldn't edit profile"
            ],403);
        }

        Profile::where('id', $id)
            -> where('username', $req -> get('username'))
            -> update([
                'about' => $req -> get('about')
            ]);
    }
}
