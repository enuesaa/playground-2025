<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\PictureResource;
use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Illuminate\Contracts\Support\Responsable;

final class PictureController extends Controller
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function view(): Responsable
    {
        $usecase = new AstronomyPictureUseCase($this->nasa);
        $picture = $usecase->get();

        return new PictureResource($picture);
    }
}
