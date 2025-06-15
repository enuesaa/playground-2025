<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * 
 *
 * @property int $id
 * @property string $title
 * @property string $image_url
 * @property string $explanation
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\PictureFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereExplanation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Picture whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Picture extends Model
{
    /** @use HasFactory<\Database\Factories\PictureFactory> */
    use HasFactory;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'image_url',
        'explanation',
    ];

    /**
     * @var list<string>
     */
    protected $hidden = [];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            // 'email_verified_at' => 'datetime',
            // 'password' => 'hashed',
        ];
    }

}
