<script lang="ts">
	import config from '$lib/config.json';
	import type { StartpageConfig } from '$lib/types/config';
	import Header from '$lib/components/Header.svelte';
	import LinkGrid from '$lib/components/LinkGrid.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const startpageConfig = config as StartpageConfig;

	const backgroundStyle = `background-image: url(${startpageConfig.background.url});
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover`;
</script>

<div id="backgroundWrapper" class="fixed h-full w-full overflow-auto" style={backgroundStyle}>
	<div id="container" class="z-10 grid h-full grid-rows-[auto_1fr_auto] p-4">
		<div class="row-start-1">
			<Header />
		</div>
		<div class="row-start-2">
			<LinkGrid />
		</div>
		<div class="row-start-3">
			<Footer internalUrl={startpageConfig.internalUrl} />
		</div>
	</div>
</div>
