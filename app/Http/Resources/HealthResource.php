<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

#[OA\Schema(title: 'Health', description: 'Health', required: ['ok'])]
class HealthResource extends Resource
{
    /**
     * @var null
     */
    public $resource;

    public function __construct()
    {
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    #[OA\Property(property: 'ok', type: 'bool', description: 'is health')]
    public function toArray(Request $request): array
    {
        $data = [
            'ok' => true,
        ];
        return $data;
    }
}
