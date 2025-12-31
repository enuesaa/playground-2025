<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

final class HealthTest extends TestCase
{
    public function testApiHealth(): void
    {
        $response = $this->get('/api/health');
        $response->assertStatus(200);
        $response->assertResponseSchema();
    }
}
