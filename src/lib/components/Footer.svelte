<script lang="ts">
	import { HouseWifi } from '@lucide/svelte';

	let { internalUrl }: { internalUrl: string } = $props();

	let isReachable = $state(false);

	$effect(() => {
		if (!internalUrl) return;
		checkUrl();

		async function checkUrl() {
			try {
				await fetch(internalUrl, {
					method: 'HEAD',
					mode: 'no-cors',
					signal: AbortSignal.timeout(3000) // 3 second timeout
				});
				isReachable = true;
			} catch {
				isReachable = false;
			}
		}
	});
</script>

<div class="flex justify-between p-4 text-xs font-normal">
	<div>
		{#if isReachable}
			<a
				href={internalUrl}
				target="_blank"
				class="text-white/60 transition-all duration-200 ease-in-out hover:text-white dark:text-black/60 dark:hover:text-black"
			>
				<HouseWifi class="h-6 w-6" />
			</a>
		{/if}
	</div>
	<div></div>
</div>
