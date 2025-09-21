<div>
    <img src="/api/proxy?url={{ $photo }}" wire:key="{{ $photo }}" />

    <!-- <div wire:poll.3000ms="nextSlide"></div> -->
    <button wire:click="nextSlide">Next</button>
</div>
