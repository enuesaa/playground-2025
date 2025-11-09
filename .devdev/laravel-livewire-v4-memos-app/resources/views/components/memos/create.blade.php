<?php

use App\Models\Memo;
use Livewire\Component;
use Livewire\Attributes\Validate;

new class extends Component
{
    public string $onClose;

    #[Validate('required|max:100', message: 'Please provide a title')]
    public $title = '';
 
    #[Validate('required')]
    public $content = '';
 
    public function save()
    {
        Memo::create($this->validate());

        return redirect()->to('/');
    }
};
?>

<div class="bg-white rounded-lg shadow-lg border border-slate-100 p-4">

    <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-semibold">New Memo</h3>
        <button wire:click="$dispatch($onClose)" class="text-slate-600 hover:text-slate-900">✕</button>
    </div>

    <form wire:submit="save" class="space-y-3">
        <label>
            Title
            <input type="text" wire:model="title" class="mt-1 block w-full rounded-md border px-3 py-2 text-sm">
            @error('title') <p class="text-xs text-red-600 mt-1">{{ $message }}</p> @enderror
        </label>
        <label>
            Content
            <textarea wire:model="content" rows="5" class="mt-1 block w-full rounded-md border px-3 py-2 text-sm"></textarea>
            @error('content') <p class="text-xs text-red-600 mt-1">{{ $message }}</p> @enderror
        </label>
        <div class="flex justify-end gap-2">
            <button type="button" wire:click="$dispatch($onClose)" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-transparent text-slate-700 hover:bg-slate-50">Cancel</button>
            <button type="submit" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700">Save</button>
        </div>
    </form>
</div>
