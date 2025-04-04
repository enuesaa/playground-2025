<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Services\Nasa\Nasa;

final class AstronomyPictureUseCase
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function get(): array
    {
        return $this->nasa->getAstronomyPictureOfTheDay();
    }
}
