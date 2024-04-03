<script lang="ts">
	import type { CategoryPreview } from '$lib/types';
	import Posts from '$lib/home/posts.svelte';

	export let category: CategoryPreview;
	export let intent: 'main' | 'left' | 'right' = 'main';
</script>

<div class="mx-auto max-w-screen-xl px-6 pb-6 pt-14 lg:pt-20">
	<div
		class="border-b border-t-[5px] border-b-outlineVariant border-t-onBackground py-3 text-xl font-bold"
	>
		{category.category}
	</div>
</div>
<Posts {intent} posts={category.posts} />
