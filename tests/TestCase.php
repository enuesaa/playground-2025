<?php

declare(strict_types=1);

namespace Tests;

use Database\Seeders\TestingSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use Testcontainers\Modules\MySQLContainer;
use Testcontainers\Container\StartedGenericContainer;
use Illuminate\Foundation\Testing\RefreshDatabase;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;

    protected string $seeder = TestingSeeder::class;
    protected StartedGenericContainer $mysql;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mysql = (new MySQLContainer('8.0'))
            ->withMySQLDatabase('test')
            ->withMySQLUser('test', 'test')
            ->start();
        config([
            'database.connections.mysql.host' => 'host.docker.internal',
            'database.connections.mysql.port' => $this->mysql->getMappedPort(3306),
            'database.connections.mysql.database' => 'test',
            'database.connections.mysql.username' => 'test',
            'database.connections.mysql.password' => 'test',
        ]);
        Artisan::call('migrate');
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        $this->mysql->stop();
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
