<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class PictureController extends Controller
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function view(): Response
    {
        $usecase = new AstronomyPictureUseCase($this->nasa);

        return new JsonResponse($usecase->get());
    }
}
