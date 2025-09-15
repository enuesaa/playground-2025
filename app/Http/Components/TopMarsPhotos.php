<?php
 
namespace App\Http\Components;

use App\Services\Nasa\DataModels\MarsRoverPhoto;
use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Livewire\Component;
 
class TopMarsPhotos extends Component
{
    /**
     * @var MarsRoverPhoto[] photos
     */
    protected array $photos;

    public function mount(Nasa $nasa): void
    {
        $usecase = new AstronomyPictureUseCase($nasa);
        $this->photos = $usecase->listMarsRoverPhotos();
    }
 
    public function render()
    {
        return view('components.top-mars-photos', [
            'photos' => $this->photos,
        ]);
    }
}
