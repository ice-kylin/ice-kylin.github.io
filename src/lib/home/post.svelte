<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate, getDate } from '$lib/utils';
	import * as config from '$lib/config';
	import { title } from '$lib/config';
	import Dot from '$lib/component/dot.svelte';
	import Item from '$lib/component/item.svelte';

	export let wide: boolean;
	export let post: Post;
</script>

<Item {wide}>
	<div class="flex h-full flex-col gap-2">
		<a
			class="font-bold decoration-main decoration-wavy underline-offset-4 hover:text-main hover:underline"
			href={post.slug}>{post.title}</a
		>
		<p class="line-clamp-5 text-sm text-onSurfaceVariant">
			{post.description}
		</p>
		<div
			class="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-onSurfaceVariant"
		>
			<span class="font-num text-main"
				>{formatDate(getDate(post.date))}</span
			>
			<Dot />
			{#each post.tags as tag}
				<a href="/" class="hover:underline">#&nbsp;{tag}</a>
			{/each}
		</div>
	</div>
	{#if post.img}
		<a href={post.slug} class="h-32 w-32 shrink-0 overflow-hidden">
			<enhanced:img
				alt={title}
				class="h-32 w-32 object-cover transition hover:scale-[1.1]"
				src={config.images[post.img]}
			/>
		</a>
	{/if}
</Item>
