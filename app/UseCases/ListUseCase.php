<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Services\Nasa\NasaClient;

class ListUseCase
{
    public function __construct(
        protected NasaClient $nasa,
    ) {}

    public function list(): string
    {
        return $this->nasa->hello();
    }
}
