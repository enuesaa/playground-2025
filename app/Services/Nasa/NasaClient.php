<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use GuzzleHttp\Client;

/**
 * Asteroids - NeoWs を見ようかな
 * たぶん日単位でデータが変わるので、面白そう？
 * 
 * @see https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY
 */
class NasaClient
{
    protected string $apikey;
    protected string $baseurl;

    public function __construct()
    {
        $this->apikey = config('aero.nasa.apikey');
        $this->baseurl = 'https://api.nasa.gov';
    }

    /**
     * TODO: 正式名称がわかってないから変なメソッド名になっている
     */
    public function listPlanetaryApod(): array
    {
        $endpoint = sprintf('%s/planetary/apod', $this->baseurl);

        // TODO: use Guzzle Middleware to append api_key
        $url = sprintf('%s?api_key=%s', $endpoint, $this->apikey);

        $client = new Client();
        $res = $client->get($url);
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        // TODO: make this data class.
        return $resbody;
    }
}
