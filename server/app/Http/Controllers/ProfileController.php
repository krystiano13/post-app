<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function get(string $username) {
        $profile = Profile::where('username', $username) -> get();

        return response([
            'status' => true,
            'profile' => $profile
        ], 200);
    }
}
