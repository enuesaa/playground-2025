<script lang="ts">
	import { useSyncStore } from '$lib/syncstore.svelte'
	import type { EventHandler } from 'svelte/elements'

	let syncStore = useSyncStore()
	let checked = $state(false)

	const handleClick: EventHandler = async (e) => {
		e.preventDefault()
		syncStore.send('')
		checked = true
		setTimeout(() => (checked = false), 3000)
	}
</script>

<button type="button" class="block absolute -top-7 right-12" onclick={handleClick}>
	{#if checked}
		OK!
	{:else}
		Reset
	{/if}
</button>
