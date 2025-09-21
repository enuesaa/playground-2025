<?php

namespace App\Http\Components;

use Livewire\Component;

class CommonHeader extends Component
{
    public string $title;
 
    public function mount(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function render()
    {
        return view('common.header');
    }
}
