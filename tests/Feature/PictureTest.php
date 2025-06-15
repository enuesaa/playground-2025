<?php

declare(strict_types=1);

namespace Tests\Feature;

use Database\Seeders\TestingSeeder;
use Tests\TestCase;

final class PictureTest extends TestCase
{
    protected string $seeder = TestingSeeder::class;

    /**
     * A basic test example.
     */
    public function testApiHealth(): void
    {
        $response = $this->get('/api/picture');
        $response->assertStatus(200);
        $response->assertJson([
            'title' => 'a',
            'url' => 'b',
        ], strict: true);
        $response->assertResponseSchema();
    }
}
