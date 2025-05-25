<?php

declare(strict_types=1);

use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\Route;

Route::get('/picture', [PictureController::class, 'view']);
Route::view('/', 'main');
Route::view('/about', 'main');
