<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\PictureResource;
use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Illuminate\Contracts\Support\Responsable;
use OpenApi\Attributes as OA;

final class PictureController extends Controller
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    #[OA\Get(path: '/api/picture', operationId: 'getPicture')]
    #[OA\Response(
        response: 200,
        description: 'getPicture',
        content: new OA\JsonContent(ref: PictureResource::class),
    )]
    public function view(): Responsable
    {
        $usecase = new AstronomyPictureUseCase($this->nasa);
        $picture = $usecase->getNow();

        return new PictureResource($picture);
    }
}
