<?php

declare(strict_types=1);

namespace App\Services\Nasa\DataModels;

use Illuminate\Support\Arr;

class AstronomyPictureDataModel
{
    protected array $data = [];

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function date(): string
    {
        return Arr::get($this->data, 'data');
    }

    public function title(): string
    {
        return Arr::get($this->data, 'title');
    }

    public function explanation(): string
    {
        return Arr::get($this->data, 'explanation');
    }

    public function url(): string
    {
        return Arr::get($this->data, 'url');
    }
}
