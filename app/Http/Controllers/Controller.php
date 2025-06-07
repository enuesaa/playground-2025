<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use OpenApi\Attributes as OA;

#[OA\Info(title: 'My First API', version: '0.1')]
abstract class Controller
{
}
