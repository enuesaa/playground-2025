<?php

namespace App\Providers;

use App\Services\Nasa\NasaClient;
use Illuminate\Support\ServiceProvider;

class NasaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(NasaClient::class, function () {
            return new NasaClient();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
