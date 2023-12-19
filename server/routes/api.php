<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', [PostController::class, 'get']);
Route::get('/posts/{id}', [PostController::class, 'getOne']);
Route::get('/posts/latest/{page}', [PostController::class, 'getLatest']);
Route::post('/posts/store', [PostController::class, 'store']);
