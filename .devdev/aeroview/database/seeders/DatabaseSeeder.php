<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Picture;
use Illuminate\Database\Seeder;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Picture::factory(10)->create();
    }
}
