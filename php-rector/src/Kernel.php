<?php
declare(strict_types=1);

namespace App;

use App\Commands\HelloCmd;
use Symfony\Component\Console\Application;

class Kernel
{
    public static function run(): void
    {
        $app = new Application('hello', 'v0.0.1');
        $app->add(new HelloCmd());
        $app->run();
    }
}
