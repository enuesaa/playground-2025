<?php

namespace App\Http\Components;

use Livewire\Component;

class CommonHeader extends Component
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function render()
    {
        return view('common.header');
    }
}
