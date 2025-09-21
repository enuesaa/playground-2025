<?php

namespace App\Http\Components;

use App\Services\Nasa\Nasa;
use App\UseCases\AstronomyPictureUseCase;
use Livewire\Component;

class TopMarsPhoto extends Component
{
    /**
     * @var string[] photos
     */
    public array $photos = [];
 
    public int $currentIndex = 0;

    public function mount(Nasa $nasa): void
    {
        $usecase = new AstronomyPictureUseCase($nasa);
        $photos = $usecase->listMarsRoverPhotos();

        foreach($photos as $photo) {
            $this->photos[] = $photo->imgSrc();
        }
    }

    public function nextSlide(): void
    {
        if ($this->currentIndex + 1 >= count($this->photos)) {
            $this->currentIndex = 0;
        } else {
            $this->currentIndex += 1;
        }
    }

    public function render()
    {
        return view('top.mars-photo', [
            'photo' => $this->photos[$this->currentIndex],
        ]);
    }
}
