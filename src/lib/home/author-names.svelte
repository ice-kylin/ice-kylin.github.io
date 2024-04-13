<script lang="ts">
	import type { AuthorPreview1, AuthorPreview2 } from '$lib/types';

	export let authors: AuthorPreview1[] | AuthorPreview2[];
</script>

{#each authors as author, i}
	<a href={`/author/${author.slug}`} class="hover:text-main hover:underline"
		>{author.name}
	</a>
	{#if i < authors.length - 1}&&nbsp;{/if}
{/each}
