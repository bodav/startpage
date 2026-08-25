<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('darkMode', String(isDark));
	}
</script>

<button
	onclick={toggle}
	aria-label="Toggle dark mode"
	class="opacity-60 transition-all duration-500 ease-in-out hover:opacity-80"
>
	{#if isDark}
		<Sun class="h-6 w-6 fill-current" />
	{:else}
		<Moon class="h-6 w-6 fill-current" />
	{/if}
</button>
