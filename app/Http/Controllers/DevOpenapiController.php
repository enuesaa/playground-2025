<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use OpenApi\Generator;

class DevOpenapiController extends Controller
{
    public function __construct()
    {}

    public function view(): string
    {
        $generator = new Generator();
        $openapi = $generator->generate([App::path()]);

        return $openapi->toJson();
    }
}
