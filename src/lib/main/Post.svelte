<script lang="ts">
	import Dot from '$lib/component/Dot.svelte';
	import type { Post } from '$lib/types';
	import { formatDate, getDate } from '$lib/utils';

	export let post: Post;
</script>

<li
	class="mt-3 flex flex-col gap-2 border-b border-dotted border-b-outlineVariant pb-2"
>
	<a href={post.slug} class="font-bold">{post.title}</a>
	<p class="text-sm text-onSurfaceVariant">{post.description}</p>
	<div class="flex items-center gap-2 text-xs text-onSurfaceVariant">
		<span class="font-num">{formatDate(getDate(post.date))}</span>
		<Dot />
		{#each post.tags as tag}
			<a href="/" class="hover:underline">#&nbsp;{tag}</a>
		{/each}
	</div>
</li>
