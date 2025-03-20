<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProtoController extends Controller
{
    public function index()
    {
        $apikey = '';
    
        $res = Http::get("https://api.nasa.gov/planetary/apod?api_key={$apikey}");

        $resbody = $res->json();
        var_dump($resbody);
    }
}
