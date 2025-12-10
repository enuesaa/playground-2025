<script lang="ts">
	import { AwsRum } from 'aws-rum-web'
	import type { AwsRumConfig } from 'aws-rum-web'
	import { PUBLIC_CWRUM_APPLICATION_ID } from '$env/static/public'
	import { onMount } from 'svelte'

	onMount(() => {
		try {
			const config: AwsRumConfig = {
				sessionSampleRate: 1,
				endpoint: 'https://dataplane.rum.ap-northeast-1.amazonaws.com',
				telemetries: ['performance', 'errors', 'http'],
				allowCookies: true,
				enableXRay: false,
				signing: false,
			}
			const awsRum = new AwsRum(PUBLIC_CWRUM_APPLICATION_ID, '1.0.0', 'ap-northeast-1', config)
		} catch (error) {
			console.error(error)
		}
	})
</script>
