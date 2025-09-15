<div>
    <flux:navbar>
        <flux:navbar.item href="/" current>Top</flux:navbar.item>
        <flux:navbar.item href="/a">a</flux:navbar.item>
        <flux:navbar.item href="/b">b</flux:navbar.item>
        <flux:navbar.item href="/c">c</flux:navbar.item>
    </flux:navbar>

    <div>
        <h1>{{ $count }}</h1>    
        <button wire:click="increment">+</button>
        <button wire:click="decrement">-</button>
    </div>

    <livewire:top-mars-photos />
</div>
