<?php

use Livewire\Component;
use Livewire\Attributes\Modelable;

new class extends Component
{
    #[Modelable]
    public bool $show;

    public function close(): void
    {
        $this->show = false;
    }
};
?>

<div>
    @if ($show)
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" wire:click="close"></div>
        <div class="relative w-full max-w-lg mx-4">
            {{ $slot }}
            aa
        </div>
    </div>
    @endif
</div>

