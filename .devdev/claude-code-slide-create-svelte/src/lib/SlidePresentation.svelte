<script>
	import { onMount } from 'svelte';
	import { annotate } from 'rough-notation';
	import ThreeBackground from './ThreeBackground.svelte';
	import slides from './slides.js';
	
	let currentSlide = 0;
	let isAnimating = false;
	
	function nextSlide() {
		if (isAnimating || currentSlide >= slides.length - 1) return;
		isAnimating = true;
		currentSlide++;
		setTimeout(() => {
			isAnimating = false;
			addRoughAnnotations();
		}, 500);
	}
	
	function prevSlide() {
		if (isAnimating || currentSlide <= 0) return;
		isAnimating = true;
		currentSlide--;
		setTimeout(() => {
			isAnimating = false;
			addRoughAnnotations();
		}, 500);
	}
	
	function goToSlide(index) {
		if (isAnimating || index === currentSlide) return;
		isAnimating = true;
		currentSlide = index;
		setTimeout(() => {
			isAnimating = false;
			addRoughAnnotations();
		}, 500);
	}
	
	function addRoughAnnotations() {
		// Add rough-notation animations to key elements
		setTimeout(() => {
			const highlights = document.querySelectorAll('.highlight');
			const underlines = document.querySelectorAll('.underline');
			const circles = document.querySelectorAll('.circle');
			
			highlights.forEach(el => {
				const annotation = annotate(el, { type: 'highlight', color: '#667eea', animationDuration: 1000 });
				annotation.show();
			});
			
			underlines.forEach(el => {
				const annotation = annotate(el, { type: 'underline', color: '#764ba2', animationDuration: 800 });
				annotation.show();
			});
			
			circles.forEach(el => {
				const annotation = annotate(el, { type: 'circle', color: '#f093fb', animationDuration: 1200 });
				annotation.show();
			});
		}, 100);
	}
	
	function handleKeydown(event) {
		switch (event.key) {
			case 'ArrowRight':
			case ' ':
				nextSlide();
				break;
			case 'ArrowLeft':
				prevSlide();
				break;
			case 'Home':
				goToSlide(0);
				break;
			case 'End':
				goToSlide(slides.length - 1);
				break;
		}
	}
	
	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		addRoughAnnotations();
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<ThreeBackground />

<div class="presentation">
	<div class="slide-container" class:animating={isAnimating}>
		<div class="slide" data-slide={currentSlide + 1}>
			{@html slides[currentSlide].content}
		</div>
	</div>
	
	<div class="navigation">
		<button on:click={prevSlide} disabled={currentSlide === 0}>←</button>
		<span class="slide-counter">{currentSlide + 1} / {slides.length}</span>
		<button on:click={nextSlide} disabled={currentSlide === slides.length - 1}>→</button>
	</div>
	
	<div class="slide-dots">
		{#each slides as _, index}
			<button 
				class="dot" 
				class:active={index === currentSlide}
				on:click={() => goToSlide(index)}
				aria-label="Go to slide {index + 1}"
			></button>
		{/each}
	</div>
</div>

<style>
	.presentation {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		position: relative;
		overflow: hidden;
		z-index: 0;
	}
	
	.slide-container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	
	.slide-container.animating {
		transform: scale(0.95);
		opacity: 0.8;
	}
	
	.slide {
		background: white;
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		padding: 3rem 3rem 8rem 3rem;
		max-width: 90%;
		max-height: 80%;
		overflow-y: auto;
		transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		transform-origin: center;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.navigation {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.1);
		padding: 0.5rem 1rem;
		border-radius: 25px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.navigation button {
		background: rgba(255, 255, 255, 0.2);
		border: none;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 15px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 1.2rem;
	}
	
	.navigation button:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.3);
		transform: scale(1.05);
	}
	
	.navigation button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	
	.slide-counter {
		color: white;
		font-weight: 500;
		padding: 0 0.5rem;
	}
	
	.slide-dots {
		position: absolute;
		bottom: 6rem;
		right: 2rem;
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
	}
	
	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.dot:hover {
		background: rgba(255, 255, 255, 0.5);
		transform: scale(1.2);
	}
	
	.dot.active {
		background: white;
		transform: scale(1.3);
	}
	
	:global(h1) {
		font-size: 3rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #667eea, #764ba2);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}
	
	:global(h2) {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #333;
		text-align: center;
	}
	
	:global(h3) {
		font-size: 2rem;
		margin-bottom: 0.8rem;
		color: #555;
	}
	
	:global(p) {
		font-size: 1.3rem;
		line-height: 1.6;
		color: #666;
		margin-bottom: 1rem;
	}
	
	:global(div) {
		padding-bottom: 300px;
	}
	
	:global(ul) {
		font-size: 1.3rem;
		line-height: 1.8;
		color: #666;
		padding-left: 2rem;
	}
	
	:global(li) {
		margin-bottom: 0.5rem;
	}
	
	:global(code) {
		background: #f4f4f4;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 0.9em;
	}
	
	:global(pre) {
		background: #f8f8f8;
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 1rem 0;
		border-left: 4px solid #667eea;
	}
	
	.slide :global(.claude-md-content) {
		max-height: 60vh;
		overflow-y: auto;
		padding: 1rem 1rem 6rem 1rem;
		background: #fafafa;
		border-radius: 8px;
		border: 1px solid #e0e0e0;
		margin-bottom: 5rem;
	}
</style>