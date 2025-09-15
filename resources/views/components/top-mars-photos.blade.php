<div>
    @foreach ($photos as $photo)
        <img src="/api/proxy?url={{ $photo->imgSrc() }}" alt="{{ $photo->id() }}" wire:key="{{ $photo->id() }}" />
    @endforeach
</div>
