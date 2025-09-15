<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use App\Services\Nasa\DataModels\AstronomyPicture;

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

    public function getAstronomyPictureOfTheDay(): AstronomyPicture
    {
        $res = $this->client->get('/planetary/apod');
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        return new AstronomyPicture($resbody);
    }

    public function listPictures()
    {
        // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
    }
}
