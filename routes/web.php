<?php

declare(strict_types=1);

use App\Http\Controllers\ProtoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'a';
});

Route::get('/proto', [ProtoController::class, 'index']);
