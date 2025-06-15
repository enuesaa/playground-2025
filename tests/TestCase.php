<?php

declare(strict_types=1);

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    /**
     * @return TestResponse
     */
    public function get($uri, array $headers = [])
    {
        $response = parent::get($uri, $headers);

        return TestResponse::create($response->baseResponse, $response->baseRequest);
    }
}
