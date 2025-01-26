<script lang="ts">
	import { createSyncStore } from '$lib/syncstore.svelte'

	let syncStore = createSyncStore()
</script>

{syncStore.data}
