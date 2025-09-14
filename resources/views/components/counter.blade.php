<div>
    <h1>{{ $count }}</h1>
    <img src="{{ $picture->image_url }}" alt="{{ $picture->title }}">
 
    <button wire:click="increment">+</button>
    <button wire:click="decrement">-</button>
</div>
