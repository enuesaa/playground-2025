<?php

declare(strict_types=1);

namespace Tests;

use Database\Seeders\TestingSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Tests\Traits\TestContainer;

abstract class TestCase extends BaseTestCase
{
    use TestContainer;

    protected string $seeder = TestingSeeder::class;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setUpTestContainerIfNeed();
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        $this->tearDownTestContainerIfNeed();
    }

    /**
     * @return TestResponse
     */
    public function get($uri, array $headers = [])
    {
        $response = parent::get($uri, $headers);

        return TestResponse::create($response->baseResponse, $response->baseRequest);
    }
}
