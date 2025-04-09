<?php

declare(strict_types=1);

namespace App\Services\Nasa\DataModels;

class AstronomyPicture extends DataModel
{
    public function title(): string
    {
        return $this->get('title');
    }

    public function explanation(): string
    {
        return $this->get('explanation');
    }

    public function url(): string
    {
        return $this->get('url');
    }
}
