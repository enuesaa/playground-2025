<?php

use App\Livewire\Forms\MemoCreateForm;
use App\Models\Memo;
use Livewire\Component;
 
new class extends Component
{
    public MemoCreateForm $form;
 
    public function save()
    {
        Memo::create($this->form->validate());

        return redirect()->to('/');
    }
};
?>
 
<form wire:submit="save">
    <label>
        Title
        <input type="text" wire:model="form.title" class="border">
        @error('form.title') <span style="color: red;">{{ $message }}</span> @enderror
    </label>
 
    <label>
        Content
        <textarea wire:model="form.content" rows="5" class="border"></textarea>
        @error('form.content') <span style="color: red;">{{ $message }}</span> @enderror
    </label>
 
    <button type="submit" class="border">Save</button>
</form>
