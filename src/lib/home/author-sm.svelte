<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import AuthorNames from './author-names.svelte';

	export let post: PostPreview;
</script>

<div
	class="flex flex-wrap items-center justify-between gap-2 pt-6 lg:block lg:pt-2.5"
>
	<p class="text-sm font-bold">
		<AuthorNames authors={post.authors} />
	</p>
	<p class="font-mono text-sm text-onSurfaceVariant lg:pt-1">
		{post.publishedAt}
	</p>
</div>
