<script lang="ts">
	import config from '$lib/config.json';
	import type { StartpageConfig } from '$lib/types/config';
	import LinkCell from './LinkCell.svelte';

	const links = (config as StartpageConfig).links;
</script>

<div class="flex h-full items-center justify-center">
	<div class="grid grid-cols-4 grid-rows-3 gap-2 text-white dark:text-black">
		{#each links as link (link.title)}
			<LinkCell title={link.title} url={link.url} icon={link.icon} />
		{/each}
	</div>
</div>
