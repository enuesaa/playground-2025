<?php

use App\Models\Memo;
use Livewire\Component;
use Livewire\Attributes\Validate;

new class extends Component
{
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
 
<form wire:submit="save">
    <label>
        Title
        <input type="text" wire:model="title" class="border">
        @error('title') <span style="color: red;">{{ $message }}</span> @enderror
    </label>
 
    <label>
        Content
        <textarea wire:model="content" rows="5" class="border"></textarea>
        @error('content') <span style="color: red;">{{ $message }}</span> @enderror
    </label>
 
    <button type="submit" class="border">Save</button>
</form>
