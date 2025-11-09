<?php

use Illuminate\Support\Facades\Route;

Route::livewire('/', 'pages::top');
Route::livewire('/post/create', 'pages::post.create');
