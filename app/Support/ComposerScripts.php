<?php

declare(strict_types=1);

namespace App\Support;

use Composer\Script\Event;
use Illuminate\Foundation\ComposerScripts as LaravelComposerScripts;

final class ComposerScripts extends LaravelComposerScripts
{
    public static function postInstall(Event $event)
    {
        parent::postInstall($event);

        $env = base_path('.env');
        $envExample = base_path('.env.example');

        if (! file_exists($env)) {
            copy($envExample, $env);
        }
    }
}
