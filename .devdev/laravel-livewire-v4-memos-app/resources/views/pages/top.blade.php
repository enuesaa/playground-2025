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
    <livewire:common.pagetop title="Top">
        <button wire:click="$dispatch('createMemoModal.open')" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700">
            New Post
        </button>
    </livewire:common.pagetop>

    <ul class="mt-6 space-y-3">
    @foreach ($this->memos as $memo)
        <li>
            <a href="/memos/{{ $memo->id }}" class="block bg-white rounded-lg border border-slate-100 p-4 hover:shadow-sm">
                <h3 class="font-medium text-slate-900">{{ $memo->title }}</h3>
                <p class="mt-1 text-sm text-slate-600 truncate">{{ $memo->content }}</p>
            </a>
        </li>
    @endforeach
    </ul>

    <livewire:memos.create />
</div>
