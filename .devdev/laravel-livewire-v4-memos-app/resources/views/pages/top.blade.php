<?php

use App\Models\Memo;
use Livewire\Component;
use Livewire\Attributes\Computed;

new class extends Component
{ 
    #[Computed]
    public function memos()
    {
        return Memo::all();
    }
};
?>

<div>
    <h1 class="text-3xl font-bold underline">top page</h1>

    <ul>
    @foreach ($this->memos as $memo)
        <li><a href="/memos/{{ $memo->id }}">{{ $memo->title }}</a></li>
    @endforeach
    </ul>

    <a href="/memos/create">create</a>
</div>
