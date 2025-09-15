<?php
 
namespace App\Http\Components;

use Livewire\Component;
 
class TopPage extends Component
{
    public $count = 1;

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
        return view('components.top-page');
    }
}
