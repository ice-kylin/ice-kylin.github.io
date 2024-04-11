<script lang="ts">
	import type { PostPreview1 } from '$lib/types.js';
	import AuthorAvatars from '$lib/home/author-avatars.svelte';
	import AuthorNames from '$lib/home/author-names.svelte';

	export let post: PostPreview1;
</script>

<div class="flex flex-wrap items-center justify-between gap-2 pt-6">
	<div class="flex items-center gap-8">
		<AuthorAvatars authors={post.authors} />
		<p class="text-sm font-bold lg:text-base">
			<AuthorNames authors={post.authors} />
		</p>
	</div>
	<span class="font-mono text-sm text-onSurfaceVariant lg:text-base"
		>{post.publishedAt}</span
	>
</div>
