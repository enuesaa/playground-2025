<?php

use Illuminate\Support\Facades\Route;

Route::livewire('/', 'pages::top');
Route::livewire('/memos/{id}', 'pages::memos.view');
