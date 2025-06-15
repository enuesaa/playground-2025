<?php

namespace Database\Seeders;

use App\Models\Picture;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $picture = new Picture();
        $picture->title = 'a';
        $picture->image_url = 'b';
        $picture->explanation = 'c';
        $picture->saveOrFail();
    }
}
