<?php

use Livewire\Component;

new class extends Component
{
    public string $title = '';
    public string $onClose;
};
?>

<div wire:show="show">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/40" wire:click="{{ $onClose }}"></div>
        <div class="relative w-full max-w-lg mx-4 bg-white rounded-lg shadow-lg border border-slate-100 p-4">
            <div class="flex items-center justify-between mb-3">
                <h3 class="text-lg font-semibold">{{ $title }}</h3>
                <button wire:click="{{ $onClose }}" class="text-slate-600 hover:text-slate-900">✕</button>
            </div>

            {{ $slot }}
        </div>
    </div>
</div>

