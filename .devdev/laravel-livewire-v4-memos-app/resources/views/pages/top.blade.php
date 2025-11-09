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

    @foreach ($this->memos as $memo)
        <article>{{ $memo->title }}</article>
    @endforeach

    <a href="/post/create">create</a>
</div>
