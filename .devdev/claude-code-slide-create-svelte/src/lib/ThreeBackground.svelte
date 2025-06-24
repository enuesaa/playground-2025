<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	
	let container;
	let scene, camera, renderer, particles;
	
	onMount(() => {
		init();
		animate();
		
		return () => {
			if (renderer) {
				container.removeChild(renderer.domElement);
				renderer.dispose();
			}
		};
	});
	
	function init() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		
		renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);
		
		// Create floating particles
		const geometry = new THREE.BufferGeometry();
		const positions = [];
		const colors = [];
		
		for (let i = 0; i < 1000; i++) {
			positions.push((Math.random() - 0.5) * 2000);
			positions.push((Math.random() - 0.5) * 2000);
			positions.push((Math.random() - 0.5) * 2000);
			
			const color = new THREE.Color();
			color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55);
			colors.push(color.r, color.g, color.b);
		}
		
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
		
		const material = new THREE.PointsMaterial({
			size: 4,
			vertexColors: true,
			transparent: true,
			opacity: 0.6
		});
		
		particles = new THREE.Points(geometry, material);
		scene.add(particles);
		
		camera.position.z = 1000;
		
		// Handle window resize
		window.addEventListener('resize', onWindowResize);
	}
	
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	function animate() {
		requestAnimationFrame(animate);
		
		const time = Date.now() * 0.0005;
		
		if (particles) {
			particles.rotation.x = time * 0.1;
			particles.rotation.y = time * 0.2;
		}
		
		renderer.render(scene, camera);
	}
</script>

<div bind:this={container} class="three-background"></div>

<style>
	.three-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: none;
	}
	
	:global(.three-background canvas) {
		display: block;
	}
</style>