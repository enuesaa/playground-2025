<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\Nasa\NasaClient;
use GuzzleHttp\Client;

class ProtoController extends Controller
{
    public function __construct(
        protected NasaClient $nasa,
    ) {}

    public function index()
    {
        // Asteroids - NeoWs を見ようかな
        // https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY
        // たぶん日単位でデータが変わるので、面白そう？
        var_dump($this->nasa->hello());
        exit();

        // $apikey = config('aero.nasa.apikey');

        // $client = new Client();
        // $res = $client->get("https://api.nasa.gov/planetary/apod?api_key={$apikey}");
        // $resbody = json_decode($res->getBody()->getContents(), associative: true);
        // var_dump($resbody);
    }
}
