<?php

declare(strict_types=1);

namespace Tests;

use Database\Seeders\TestingSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;

    protected string $seeder = TestingSeeder::class;

    /**
     * @return TestResponse
     */
    public function get($uri, array $headers = [])
    {
        $response = parent::get($uri, $headers);

        return TestResponse::create($response->baseResponse, $response->baseRequest);
    }
}
