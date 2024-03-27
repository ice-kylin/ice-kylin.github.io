<script lang="ts">
	import type { PostPreview } from '$lib/types.js';
	import AuthorNames from '$lib/home/author-names.svelte';

	export let post: PostPreview;
</script>

<div class="flex flex-wrap items-center justify-between gap-2 pt-6">
	<p class="text-sm font-bold">
		<AuthorNames authors={post.authors} />
	</p>
	<span class="font-mono text-sm text-onSurfaceVariant"
		>{post.publishedAt}</span
	>
</div>
