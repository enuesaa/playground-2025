<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\Picture;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

#[OA\Schema(title: 'Picture', description: 'A Picture')]
class PictureResource extends Resource
{
    /**
     * @var Picture
     */
    public $resource;

    public function __construct(Picture $resource)
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
            'title' => $this->resource->title,
            'url' => $this->resource->image_url,
        ];
        return $data;
    }
}
