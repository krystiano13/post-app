<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $req) {
        $validation = Validator::make($req -> all(), [
            'name' => ['required', 'unique:users'],
            'email' => ['required', 'unique:users', 'email'],
            'password' => ['required', 'confirmed']
        ]);

        if($validation -> fails()) {
            return response() -> json([
                'status' => false,
                'errors' => $validation -> errors()
            ], 401);
        }

        $user = User::create([
            'name' => $req -> get('name'),
            'email' => $req -> get('email'),
            'password' => Hash::make($req -> get('password'))
        ]);

        return response() -> json([
            'status' => true,
            'token' => $user -> createToken("API TOKEN") -> plainTextToken
        ], 200);
    }
}
