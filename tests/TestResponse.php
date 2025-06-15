<?php

namespace Tests;

use Illuminate\Testing\TestResponse as BaseTestResponse;
use Illuminate\Support\Facades\App;
use League\OpenAPIValidation\PSR7\ValidatorBuilder;
use League\OpenAPIValidation\PSR7\OperationAddress;
use OpenApi\Generator;
use Symfony\Bridge\PsrHttpMessage\Factory\PsrHttpFactory;
use Nyholm\Psr7\Factory\Psr17Factory;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class TestResponse extends BaseTestResponse
{
    public static function create(Response $response, ?Request $request = null): self
    {
        return new static($response, $request);
    }

    public function assetOpenAPI(): void
    {
        $path = sprintf('/%s', $this->baseRequest->path());
        $method = strtolower($this->baseRequest->method());

        $psr17Factory = new Psr17Factory();
        $psrHttpFactory = new PsrHttpFactory(
            $psr17Factory,
            $psr17Factory,
            $psr17Factory,
            $psr17Factory
        );
        $psrResponse = $psrHttpFactory->createResponse($this->baseResponse);

        $generator = new Generator();
        $openapi = $generator->generate([App::path()]);

        $validator = (new ValidatorBuilder())
            ->fromJson($openapi->toJson())
            ->getResponseValidator();
        $address = new OperationAddress($path, $method);
        $validator->validate($address, $psrResponse);
    }
}
