<script lang="ts">
	import type { AuthorPreview } from '$lib/types';

	export let authors: AuthorPreview[];
</script>

{#each authors as author, i}
	<a href={`/author/${author.slug}`} class="hover:text-main hover:underline"
		>{author.name}</a
	>
	{#if i < authors.length - 1},&nbsp;{/if}
{/each}
