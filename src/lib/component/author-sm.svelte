<script lang="ts">
	import type { PostPreview1, PostPreview2 } from '$lib/types.js';
	import AuthorNames from '$lib/home/author-names.svelte';

	export let post: PostPreview1 | PostPreview2;
</script>

<div class="flex flex-wrap items-center justify-between gap-2 pt-3.5">
	<p class="text-sm font-bold">
		<AuthorNames authors={post.authors} />
	</p>
	<span class="font-mono text-sm text-onSurfaceVariant"
		>{post.publishedAt}</span
	>
</div>
