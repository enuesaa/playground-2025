<div class="slideshow-container">
    <div class="slide">
        <img src="/api/proxy?url={{ $photo }}" wire:key="{{ $photo }}" class="slide-image" />
    </div>
    <button wire:click="nextSlide" class="next-btn">Next Photo →</button>

    <style>
    .slideshow-container {
        max-width: 800px;
        margin: 2rem auto;
        position: relative;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .slide {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
    }

    .slide-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out;
    }

    .next-btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .next-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }

    .next-btn:active {
        transform: translateY(0);
    }
    </style>
</div>
