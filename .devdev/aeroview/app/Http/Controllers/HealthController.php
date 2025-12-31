<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\HealthResource;
use Illuminate\Contracts\Support\Responsable;
use OpenApi\Attributes as OA;

class HealthController extends Controller
{
    #[OA\Get(path: '/api/health', operationId: 'getHealth')]
    #[OA\Response(
        response: 200,
        description: 'getHealth',
        content: new OA\JsonContent(ref: HealthResource::class),
    )]
    public function view(): Responsable
    {
        return new HealthResource();
    }
}
