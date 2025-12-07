<script lang="ts">
	import './app.css'
	import Header from './Header.svelte'
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
	import CloudWatchRumProvider from './CloudWatchRumProvider.svelte'

	const queryClient = new QueryClient()
</script>

<svelte:head>
	<title>my-svelte-template</title>
</svelte:head>

<CloudWatchRumProvider />
<QueryClientProvider client={queryClient}>
	<Header />
	<main class="container mx-auto">
		<slot />
	</main>
</QueryClientProvider>
