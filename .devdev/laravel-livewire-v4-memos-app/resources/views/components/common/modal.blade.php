<?php

use Livewire\Attributes\Modelable;
use Livewire\Component;

new class extends Component
{
    #[Modelable]
    public bool $show;
};
?>

<div wire:show="show">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" wire:click="close"></div>
        <div class="relative w-full max-w-lg mx-4">
            {{ $slot }}
        </div>
    </div>
</div>

