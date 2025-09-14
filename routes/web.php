<?php

declare(strict_types=1);

use App\Http\Controllers\DevOpenapiController;
use App\Http\Controllers\HealthController;
use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

Route::view('/', 'main');
Route::view('/about', 'main');

Route::prefix('/api')->group(function () {
    Route::get('/health', [HealthController::class, 'view']);
    Route::get('/picture', [PictureController::class, 'view']);
});

if (App::isLocal()) {
    Route::get('/dev/openapi.json', [DevOpenapiController::class, 'view']);
}


use App\Livewire\Counter; 
Route::get('/counter', Counter::class);
