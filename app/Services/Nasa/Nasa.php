<?php

declare(strict_types=1);

namespace App\Services\Nasa;

use App\Services\Nasa\DataModels\AstronomyPicture;
use App\Services\Nasa\DataModels\MarsRoverPhoto;

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

    /**
     * @return MarsRoverPhoto[] photo
     */
    public function listMarsRoverPhotos(): array
    {
        $res = $this->client->get('/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz');
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        $list = [];
        foreach ($resbody['photos'] as $photo) {
            $list[] = new MarsRoverPhoto($photo);
        }
        return $list;
    }
}
