<?php

use Livewire\Component;
use Livewire\Attributes\On;

new class extends Component
{
    public string $name;
    public bool $show = false;

    #[On('{name}.close')] 
    public function close(): void
    {
        $this->show = false;
    }

    #[On('{name}.open')] 
    public function open(): void
    {
        $this->show = true;
    }
};
?>

<div>
    <div class="fixed inset-0 z-50 flex items-center justify-center" wire:show="show">
        <div class="absolute inset-0 bg-black/40" wire:click="close"></div>
        <div class="relative w-full max-w-lg mx-4">
            {{ $slot }}
        </div>
    </div>
</div>

