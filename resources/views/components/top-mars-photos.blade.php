<div>
    @foreach ($photos as $photo)
        <img src="{{ $photo->imgSrc() }}" alt="{{ $photo->id() }}" wire:key="{{ $photo->id() }}" />
    @endforeach
</div>
