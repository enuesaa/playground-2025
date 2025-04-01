<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Services\Nasa\Nasa;

final class ListUseCase
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function list(): array
    {
        return $this->nasa->listPlanetaryApod();
    }
}
