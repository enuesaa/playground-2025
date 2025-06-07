<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Services\Nasa\DataModels\AstronomyPicture;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

#[OA\Schema(title: 'Picture', description: 'A Picture')]
class PictureResource extends Resource
{
    /**
     * @var AstronomyPicture
     */
    public $resource;

    public function __construct(AstronomyPicture $resource)
    {
        $this->resource = $resource;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    #[OA\Property(property: 'title', type: 'string', description: 'title')]
    #[OA\Property(property: 'url', type: 'string', description: 'url', format: 'url')]
    public function toArray(Request $request): array
    {
        $data = [
            'title' => $this->resource->title(),
            'url' => $this->resource->url(),
        ];
        return $data;
    }
}
