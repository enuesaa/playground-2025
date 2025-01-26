<script lang="ts">
	import { useSyncStore } from '$lib/syncstore.svelte'
	import type { EventHandler } from 'svelte/elements'

	let syncStore = useSyncStore()
	let checked = $state(false)

	const handleClick: EventHandler = async (e) => {
		e.preventDefault()
		await globalThis.navigator.clipboard.writeText(syncStore.data)
		checked = true
		setTimeout(() => (checked = false), 3000)
	}
</script>

<button type="button" class="block absolute -top-7 right-0" onclick={handleClick}>
	{#if checked}
		OK!
	{:else}
		Copy
	{/if}
</button>
