<?php

use Livewire\Component;

new class extends Component
{
    public bool $show = false;

    public function close()
    {
        $this->dispatch('close');
    }
};
?>

<div class="fixed inset-0 z-50 flex items-center justify-center">
    {{ $show && 'a' }}

    @if ($show)
    <div class="absolute inset-0 bg-black/40" wire:click="$show = false"></div>
    <div class="relative w-full max-w-lg mx-4">
        {{ $slot }}
    </div>
    @endif
</div>
