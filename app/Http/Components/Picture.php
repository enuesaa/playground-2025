<?php
 
namespace App\Http\Components;

use App\Models\Picture as PictureModel;
use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Livewire\Component;
 
class Picture extends Component
{
    public PictureModel $picture;

    public function mount(Nasa $nasa): void
    {
        $usecase = new AstronomyPictureUseCase($nasa);
        $this->picture = $usecase->get();
    }
 
    public function render()
    {
        return view('components.picture');
    }
}
