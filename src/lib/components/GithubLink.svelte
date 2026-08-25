<script lang="ts">
	import LinkIcon from './LinkIcon.svelte';

	const repo = import.meta.env.VITE_GITHUB_REPOSITORY;
	const ref = import.meta.env.VITE_GIT_REF.split('/').pop() || 'N/A';
	const url = `https://github.com/${repo}/tree/${ref}`;
</script>

<a
	href={url}
	target="_blank"
	class="opacity-60 transition-all duration-500 ease-in-out hover:opacity-80"
>
	<LinkIcon icon="github" class="h-6 w-6 fill-current" />
</a>
