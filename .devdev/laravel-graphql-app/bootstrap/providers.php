<?php

declare(strict_types=1);

return [
    App\Providers\AppServiceProvider::class,
    \Nuwave\Lighthouse\LighthouseServiceProvider::class,
    \Nuwave\Lighthouse\Pagination\PaginationServiceProvider::class,
    \Nuwave\Lighthouse\Validation\ValidationServiceProvider::class,
    \Laravel\Pail\PailServiceProvider::class,
    \MLL\GraphiQL\GraphiQLServiceProvider::class,
];
