<script lang="ts">
	import Dot from '$lib/component/Dot.svelte';
	import type { Post } from '$lib/types';
	import Tags from '$lib/main/Tags.svelte';

	export let post: Post;
</script>

<li
	class="mt-3 flex flex-col gap-2 border-b border-dotted border-b-surfaceContainerHigh pb-2"
>
	<a href={post.slug} class="font-bold">{post.title}</a>
	<p class="text-sm text-onSurfaceVariant">{post.description}</p>
	<div class="flex items-center gap-2 text-xs text-onSurfaceVariant">
		<span class="text-main"
			><span class="font-num">2024</span> 年
			<span class="font-num">1</span>
			月 <span class="font-num">23</span> 日</span
		>
		{#if post.tags}
			<Dot />
			<Tags tags={post.tags}></Tags>
		{/if}
	</div>
</li>
