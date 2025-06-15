<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

final class HealthTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function testApplicationHealth(): void
    {
        $response = $this->get('/api/health');
        $response->assertStatus(200);
    }
}
