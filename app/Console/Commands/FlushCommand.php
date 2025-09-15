<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Illuminate\Console\Command;

class FlushCommand extends Command
{
    /**
     * @var string
     */
    protected $signature = 'app:flush';

    /**
     * @var string
     */
    protected $description = 'remove cached data';

    public function handle(Nasa $nasa): void
    {
        // $usecase = new AstronomyPictureUseCase($nasa);
        // $usecase->flush();
    }
}
