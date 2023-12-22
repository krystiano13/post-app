<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::middleware('auth:sanctum')->get('/auth/getUser', [UserController::class, 'getUser']);

//auth
Route::post('/auth/register',[UserController::class, 'register']);
Route::post('/auth/login', [UserController::class, 'login']);

//posts actions
Route::get('/posts', [PostController::class, 'get']);
Route::get('/posts/{id}', [PostController::class, 'getOne']);
Route::get('/posts/latest/{page}', [PostController::class, 'getLatest']);
Route::post('/posts/store', [PostController::class, 'store']) -> middleware('auth:sanctum');
