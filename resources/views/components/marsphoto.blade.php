<div>
    @foreach ($photos as $photo)
        <img src="{{ $photo->imgSrc() }}" alt="{{ $photo->id() }}">
    @endforeach
</div>
