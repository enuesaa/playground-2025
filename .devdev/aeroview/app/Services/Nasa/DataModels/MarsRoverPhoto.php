<?php

declare(strict_types=1);

namespace App\Services\Nasa\DataModels;

class MarsRoverPhoto extends DataModel
{
    public function id(): int
    {
        return $this->get('id');
    }

    public function imgSrc(): string
    {
        return $this->get('img_src');
    }
}
