<?php

declare(strict_types=1);

namespace Tests\Traits;

use Illuminate\Foundation\Testing\Traits\CanConfigureMigrationCommands;
use Testcontainers\Modules\MySQLContainer;
use Testcontainers\Container\StartedGenericContainer;

trait TestContainer
{
    use CanConfigureMigrationCommands;

    protected StartedGenericContainer $mysql;

    protected function setUpTestContainerIfNeed(): void
    {
        if ($this->seeder() !== false) {
            $this->startTestDatabase();
        }
    }

    protected function startTestDatabase(): void
    {
        $this->mysql = (new MySQLContainer('8.0'))
            ->withMySQLDatabase('test')
            ->withMySQLUser('test', 'test')
            ->start();
        $port = $this->mysql->getMappedPort(3306);

        config([
            'database.connections.mysql.host' => 'host.docker.internal',
            'database.connections.mysql.port' => $port,
            'database.connections.mysql.database' => 'test',
            'database.connections.mysql.username' => 'test',
            'database.connections.mysql.password' => 'test',
        ]);
        $this->artisan('migrate:fresh', $this->migrateFreshUsing());
    }

    protected function tearDownTestContainerIfNeed(): void
    {
        if ($this->seeder() !== false) {
            $this->stopTestDatabase();
        }
    }

    protected function stopTestDatabase(): void
    {
        $this->mysql->stop();
    }
}
