<?php

use Livewire\Component;
use Livewire\Attributes\Modelable;

new class extends Component
{
    #[Modelable]
    public bool $show = false;

    public function close(): void
    {
        $this->show = false;
    }
};
?>

<div>
    <div class="fixed inset-0 z-50 flex items-center justify-center" wire:show="show">
        <div class="absolute inset-0 bg-black/40" wire:click="show = false"></div>
        <div class="relative w-full max-w-lg mx-4">
            {{ $slot }}
        </div>
    </div>
</div>

