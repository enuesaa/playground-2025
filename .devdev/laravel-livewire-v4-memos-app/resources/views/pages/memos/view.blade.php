<?php
 
use App\Models\Memo;
use Livewire\Component;
 
new class extends Component
{
    public Memo $post;
 
    public function mount($id) 
    {
        $this->post = Memo::findOrFail($id);
    }
};
?>

<div>
    <div class="flex items-center gap-4 mb-6">
        <a href="/" class="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
            <span class="i-heroicons-arrow-left-20-solid w-5 h-5"></span>
            Back
        </a>
    </div>

    <article class="bg-white rounded-lg border border-slate-100 p-6">
        <header class="mb-4">
            <h1 class="text-2xl font-bold text-slate-900">{{ $this->post->title }}</h1>
            <div class="mt-2 text-sm text-slate-500">
                Created {{ $this->post->created_at->diffForHumans() }}
            </div>
        </header>

        <div class="prose prose-slate max-w-none">
            {{ $this->post->content }}
        </div>
    </article>
</div>
