<?php

namespace App\Providers;

use App\Services\Nasa\ApiClient;
use App\Services\Nasa\Nasa;
use Illuminate\Support\ServiceProvider;

class NasaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(Nasa::class, function () {
            $apikey = config('aero.nasa.apikey');
            $client = new ApiClient(apikey: $apikey);

            return new Nasa($client);
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
