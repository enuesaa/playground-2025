<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Models\Picture;
use App\Services\Nasa\Nasa;
use App\Services\Nasa\DataModels\AstronomyPicture;

final class AstronomyPictureUseCase
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function get(): AstronomyPicture
    {
        return $this->nasa->getAstronomyPictureOfTheDay();
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
