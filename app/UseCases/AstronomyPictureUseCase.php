<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Models\Picture;
use App\Services\Nasa\Nasa;

final class AstronomyPictureUseCase
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function get(): Picture
    {
        $picture = Picture::query()
            ->firstOrFail();
        return $picture;
    }

    public function getNow(): Picture
    {
        $data = $this->nasa->getAstronomyPictureOfTheDay();
        $picture = new Picture();
        $picture->title = $data->title();
        $picture->image_url = $data->url();
        $picture->explanation = $data->explanation();

        return $picture;
    }

    public function flush(): void
    {
        $data = $this->nasa->getAstronomyPictureOfTheDay();
        $picture = new Picture();
        $picture->title = $data->title();
        $picture->image_url = $data->url();
        $picture->explanation = $data->explanation();
        $picture->save();
    }
}
