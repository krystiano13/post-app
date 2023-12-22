<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $req){
        $validation = Validator::make($req -> all(), [
            'name' => ['required', 'unique:users'],
            'email' => ['required', 'unique:users', 'email'],
            'password' => ['required', 'confirmed']
        ]);

        if($validation -> fails()) {
            return response([
                'status' => false,
                'errors' => $validation -> errors()
            ], 401);
        }

        $user = User::create([
            'name' => $req -> get('name'),
            'email' => $req -> get('email'),
            'password' => Hash::make($req -> get('password'))
        ]);

        return response([
            'status' => true,
            'token' => $user -> createToken("API TOKEN", expiresAt:now() -> addDay()) -> plainTextToken
        ], 200);
    }

    public function login(Request $req) {
        $validation = Validator::make($req -> all(),[
            'name' => 'required',
            'password' => 'required'
        ]);

        if($validation -> fails()) {
            return response() -> json([
                'status' => false,
                'errors' => $validation -> errors()
            ], 401);
        }

        if(!Auth::attempt($req -> only(['name', 'password']))) {
            return response() -> json([
                'status' => false,
                'errors' => ['Wrong credentials']
            ], 401);
        }

        $user = User::where('name', $req -> get('name')) -> first();

        return response() -> json([
            'status' => true,
            'message' => 'Logged In',
            'token' => $user -> createToken("API TOKEN") -> plainTextToken
        ], 200);
    }
}
