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
    <div>{{ $this->post->title }}</div>
    <div>{{ $this->post->content }}</div>
</div>
