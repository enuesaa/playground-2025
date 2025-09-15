<?php

declare(strict_types=1);

use App\Http\Controllers\DevOpenapiController;
use App\Http\Controllers\HealthController;
use App\Http\Controllers\PictureController;
use App\Http\Components\TopPage;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

# ui
Route::get('/', TopPage::class);

# api
Route::prefix('/api')->group(function () {
    Route::get('/health', [HealthController::class, 'view']);
    Route::get('/picture', [PictureController::class, 'view']);
});

if (App::isLocal()) {
    Route::get('/dev/openapi.json', [DevOpenapiController::class, 'view']);
}
