<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use App\Services\Nasa\DataModels\AstronomyPicture;
use App\Services\Nasa\DataModels\MarsRoverPhoto;
use GuzzleHttp\Client;

/**
 * Asteroids - NeoWs を見ようかな
 * たぶん日単位でデータが変わるので、面白そう？
 *
 * サービスによってドメインが違うらしいのでサービス単位でクラス分けしたほうがいいかも
 *
 * @see https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY
 */
class Nasa
{
    protected ApiClient $client;

    public function __construct(ApiClient $client)
    {
        $this->client = $client;
    }

    /**
     * https://images-api.nasa.gov
     * @return MarsRoverPhoto[] photo
     */
    public function listImages(): array
    {
        $client = new Client();
        $res = $client->get('https://images-api.nasa.gov/search?q=orion');
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        $list = [];

        foreach ($resbody['collection']['items'] as $entry) {
            if (count($entry['links']) === 0) {
                continue;
            }
            foreach ($entry['links'] as $link) {
                $list[] = new MarsRoverPhoto(['id' => $link['href'], 'img_src' => $link['href']]);
            }
        }
        return $list;
    }

    public function getAstronomyPictureOfTheDay(): AstronomyPicture
    {
        $res = $this->client->get('/planetary/apod');
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        return new AstronomyPicture($resbody);
    }
}
