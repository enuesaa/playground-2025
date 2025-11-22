<?php

use Livewire\Component;

new class extends Component
{
    public string $label = '';
    public string $type = 'button';
    public ?string $click = null;

    public function handleClick(): void
    {
        $this->dispatch($this->click);
    }
};
?>

<button
    type="{{ $type }}"
    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700"
    @if($click != null)
        wire:click="handleClick"
    @endif
>
    {{ $label }}
</button>
