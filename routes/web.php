<?php

declare(strict_types=1);

use App\Http\Controllers\DevOpenapiController;
use App\Http\Controllers\HealthController;
use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use App\Livewire\Counter; 

# ui
Route::view('/', 'main');
Route::view('/about', 'main');

# api
Route::prefix('/api')->group(function () {
    Route::get('/health', [HealthController::class, 'view']);
    Route::get('/picture', [PictureController::class, 'view']);
});

if (App::isLocal()) {
    Route::get('/dev/openapi.json', [DevOpenapiController::class, 'view']);
}

# dev
Route::get('/counter', Counter::class);
