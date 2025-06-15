<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

final class PictureTest extends TestCase
{
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
