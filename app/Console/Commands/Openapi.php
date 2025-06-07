<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;
use OpenApi\Generator;

class Openapi extends Command
{
    /**
     * @var string
     */
    protected $signature = 'app:openapi';

    /**
     * @var string
     */
    protected $description = 'Echo OpenAPI Spec with YAML format';

    public function handle(): void
    {
        $generator = new Generator();
        $openapi = $generator->generate(['./app']);

        printf($openapi->toYaml());
    }
}
