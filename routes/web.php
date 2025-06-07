<?php

declare(strict_types=1);

use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'main');
Route::view('/about', 'main');

Route::prefix('/api')->group(function () {
    Route::get('/picture', [PictureController::class, 'view']);
});
