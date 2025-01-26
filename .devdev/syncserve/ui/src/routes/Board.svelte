<script lang="ts">
	import { useSyncStore } from '$lib/syncstore.svelte'
	import type { ChangeEventHandler } from 'svelte/elements'

	let syncStore = useSyncStore()

	$effect(() => {
		syncStore.connect()
	})

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault()
		syncStore.send(e.currentTarget.value)
	}
</script>

<textarea onkeyup={handleChange}>{syncStore.data}</textarea>

<style lang="postcss">
	textarea {
		@apply block w-[98%] h-[90vh] mx-auto bg-grayer border-black/80 border;
		@apply outline-none cursor-default;
		@apply p-4 text-2xl shadow-md shadow-black/30;
	}
</style>
