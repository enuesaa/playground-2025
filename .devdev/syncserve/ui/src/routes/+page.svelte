<script lang="ts">
	import Board from './Board.svelte'
	import CopyButton from './CopyButton.svelte'
	import ResetButton from './ResetButton.svelte'
</script>

<div class="relative mx-6">
	<ResetButton />
	<CopyButton />
</div>

<Board />
