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

        // Asteroids - NeoWs を見ようかな
        // https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY

        // たぶん日単位でデータが変わるので、面白そう？
    
        $res = Http::get("https://api.nasa.gov/planetary/apod?api_key={$apikey}");

        $resbody = $res->json();
        var_dump($resbody);
    }
}
