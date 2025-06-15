<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Support\Facades\App;
use Tests\TestCase;
use League\OpenAPIValidation\PSR7\ValidatorBuilder;
use League\OpenAPIValidation\PSR7\OperationAddress;
use OpenApi\Generator;
use Symfony\Bridge\PsrHttpMessage\Factory\PsrHttpFactory;
use Nyholm\Psr7\Factory\Psr17Factory;

final class HealthTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function testApplicationHealth(): void
    {
        $response = $this->get('/api/health');
        $response->assertStatus(200);

        $psr17Factory = new Psr17Factory();
        $psrHttpFactory = new PsrHttpFactory(
            $psr17Factory,
            $psr17Factory,
            $psr17Factory,
            $psr17Factory
        );
        $psrResponse = $psrHttpFactory->createResponse($response->baseResponse);

        $generator = new Generator();
        $openapi = $generator->generate([App::path()]);

        $validator = (new ValidatorBuilder())
            ->fromJson($openapi->toJson())
            ->getResponseValidator();
        $address = new OperationAddress('/api/health', 'get');
        $validator->validate($address, $psrResponse);
    }
}
