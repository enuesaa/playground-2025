<script lang="ts">
	import './app.css'
	import Header from './Header.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<title>syncserve</title>
</svelte:head>

<Header />

<main class="container mx-auto">
	{@render children()}
</main>

