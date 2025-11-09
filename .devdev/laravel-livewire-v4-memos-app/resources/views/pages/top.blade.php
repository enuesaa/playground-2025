<?php

use App\Models\Memo;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component
{
    public $showModal = false;

    #[Computed]
    public function memos()
    {
        return Memo::all();
    }
};
?>

<div>
    <ul>
    @foreach ($this->memos as $memo)
        <li><a href="/memos/{{ $memo->id }}">{{ $memo->title }}</a></li>
    @endforeach
    </ul>

    <button x-on:click="$wire.showModal = true">New Post</button>
 
    <div wire:show="showModal">
        <livewire:memos.create />
    </div>
</div>
