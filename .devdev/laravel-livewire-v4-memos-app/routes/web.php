<?php

use Illuminate\Support\Facades\Route;

Route::livewire('/', 'pages::top');
Route::livewire('/memos/create', 'pages::memos.create');
Route::livewire('/memos/{id}', 'pages::memos.view');
