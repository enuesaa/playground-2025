<?php

declare(strict_types=1);

namespace App\Support;

use Illuminate\Foundation\ComposerScripts as LaravelComposerScripts;
use Composer\Script\Event;

class ComposerScripts extends LaravelComposerScripts
{
    public static function postInstall(Event $event)
    {
        parent::postInstall($event);

        $env = base_path('.env');
        $envExample = base_path('.env.example');

        if (!file_exists($env)) {
            copy($envExample, $env);
        }
    }
}
