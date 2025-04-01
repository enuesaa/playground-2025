<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\Nasa\Nasa;
use App\UseCases\ListUseCase;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class ProtoController extends Controller
{
    public function __construct(
        protected Nasa $nasa,
    ) {
    }

    public function index(): Response
    {
        $usecase = new ListUseCase($this->nasa);

        return new JsonResponse($usecase->list());
    }
}
