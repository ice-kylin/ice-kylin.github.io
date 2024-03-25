<script lang="ts">
	import type { TagPreview } from '$lib/types';

	export let tags: TagPreview[];
</script>

<div class="mt-6 bg-main text-surface">
	<div class="mx-auto max-w-screen-xl px-6 py-10 font-mono text-2xl">
		<h2 class="font-bold">所有标签：</h2>
		<div class="flex flex-wrap gap-4 pt-10 underline">
			{#each tags as tag}
				<a href={`/tag/${tag.slug}`}>
					{tag.tag}
				</a>
			{/each}
		</div>
	</div>
</div>
