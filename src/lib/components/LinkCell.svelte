<script lang="ts">
	import LinkIcon from './LinkIcon.svelte';

	let { title, url, icon }: { title: string; url: string; icon: string } = $props();

	function onPointerMove(event: PointerEvent) {
		const el = event.currentTarget as HTMLElement;
		const rect = el.getBoundingClientRect();
		el.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
		el.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
	}
</script>

<div class="glass" role="presentation" onpointermove={onPointerMove}>
	<a href={url} target="_blank" class="flex items-center justify-start p-6 outline-none">
		<LinkIcon {icon} class="h-10 w-10 fill-current stroke-current" />
		<span class="ml-4 hidden text-sm font-normal sm:inline">{title}</span>
	</a>
</div>
