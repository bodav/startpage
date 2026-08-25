<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import GithubLink from './GithubLink.svelte';
</script>

<div class="flex justify-end pb-2">
	<div class="glass-menu flex items-center gap-3 px-3 py-1.5 text-white dark:text-black">
		<DarkModeToggle />
		<GithubLink />
	</div>
</div>
