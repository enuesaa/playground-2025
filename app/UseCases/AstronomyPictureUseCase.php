<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Services\Nasa\Nasa;
use App\Services\Nasa\DataModels\AstronomyPictureDataModel;

final class AstronomyPictureUseCase
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function get(): AstronomyPictureDataModel
    {
        return $this->nasa->getAstronomyPictureOfTheDay();
    }
}
