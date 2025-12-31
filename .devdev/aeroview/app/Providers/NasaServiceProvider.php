<?php

namespace App\Providers;

use App\Services\Nasa\ApiClient;
use App\Services\Nasa\Nasa;
use Illuminate\Support\ServiceProvider;

class NasaServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(Nasa::class, function () {
            $apikey = config('aeroview.nasa.apikey');
            $client = new ApiClient(apikey: $apikey);

            return new Nasa($client);
        });
    }

    public function boot(): void
    {
    }
}
