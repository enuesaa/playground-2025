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
     * @deprecated APIが廃止されたっぽい
     */
    public function listMarsRoverPhotos(): array
    {
        return [
            // TODO: mock
            new MarsRoverPhoto(['id' => 'a', 'img_src' => 'https://bb0416a7-0b68-4f49-99e9-5a9ea4da5b28.mdnplay.dev/shared-assets/images/examples/grapefruit-slice.jpg']),
            new MarsRoverPhoto(['id' => 'b', 'img_src' => 'https://008f76ca15a5fc78de7f018082bd53f7bbcb24eb.mdnplay.dev/shared-assets/images/examples/favicon144.png']),
        ];

        $res = $this->client->get('/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz');
        $resbody = json_decode($res->getBody()->getContents(), associative: true);

        $list = [];
        foreach ($resbody['photos'] as $photo) {
            $list[] = new MarsRoverPhoto($photo);
        }
        return $list;
    }
}
