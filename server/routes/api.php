<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;

Route::middleware('auth:sanctum')->get('/auth/getUser', [UserController::class, 'getUser']);

//auth
Route::post('/auth/register',[UserController::class, 'register']);
Route::post('/auth/login', [UserController::class, 'login']);

//comments actions
Route::get('/comments/{postId}', [CommentController::class, 'get']);
Route::middleware('auth:sanctum') -> post('/comments/store', [CommentController::class, 'store']);
Route::middleware('auth:sanctum') -> post('/comments/edit/{id}', [CommentController::class, 'edit']);
Route::middleware('auth:sanctum') -> post('/comments/delete/{id}', [CommentController::class, 'destroy']);

//posts actions
Route::get('/posts', [PostController::class, 'get']);
Route::get('/posts/{id}', [PostController::class, 'getOne']);
Route::get('/posts/latest/{page}', [PostController::class, 'getLatest']);
Route::middleware('auth:sanctum') -> post('/posts/store', [PostController::class, 'store']);
Route::middleware('auth:sanctum') -> post('/posts/edit/{id}', [PostController::class, 'edit']);
Route::middleware('auth:sanctum') -> post('/posts/delete/{id}', [PostController::class, 'delete']);
