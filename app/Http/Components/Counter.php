<?php
 
namespace App\Http\Components;

use App\Models\Picture;
use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Livewire\Component;
 
class Counter extends Component
{
    public $count = 1;
    public Picture $picture;

    public function mount(Nasa $nasa): void
    {
        $usecase = new AstronomyPictureUseCase($nasa);
        $this->picture = $usecase->getNow();
    }

    public function increment(): void
    {
        $this->count++;
    }
 
    public function decrement(): void
    {
        $this->count--;
    }
 
    public function render()
    {
        return view('components.counter');
    }
}
