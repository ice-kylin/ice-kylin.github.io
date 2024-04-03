<script lang="ts">
	import type { TagPreview } from '$lib/types';

	export let tags: TagPreview[];
</script>

<div class="mt-10 bg-main text-surface lg:mt-16">
	<section class="mx-auto max-w-screen-xl px-6 py-10 text-2xl">
		<h2 class="font-bold">所有标签：</h2>
		<div class="flex flex-wrap gap-4 pt-10 font-medium">
			{#each tags as tag}
				<a href={`/tag/${tag.slug}`} class="hover:underline">
					# {tag.tag}
				</a>
			{/each}
		</div>
	</section>
</div>
