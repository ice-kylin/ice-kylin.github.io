<script lang="ts">
	import Dot from '$lib/component/Dot.svelte';
	import type { Post } from '$lib/types';
	import { formatDate, getDate } from '$lib/utils';
	import clsx from 'clsx';
	import * as config from '$lib/config';
	import { title } from '$lib/config';

	export let wide: boolean;
	export let post: Post;
</script>

<li
	class={clsx(
		'w-full border-b border-dotted border-b-outlineVariant py-3',
		wide
			? 'md:flex-[5_0_calc(100%_/_2_+_6%)]'
			: 'md:flex-[1_0_calc(100%_/_3_+_1%)]'
	)}
>
	<div
		class="flex h-full gap-2 border-l border-dotted border-l-outlineVariant px-6"
	>
		<div class="flex h-full shrink flex-col gap-2">
			<a class="font-bold" href={post.slug}>{post.title}</a>
			<p class="line-clamp-3 text-xs text-onSurfaceVariant">
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
			<div class="h-16 w-16 shrink-0 md:h-32 md:w-32">
				<enhanced:img
					alt={title}
					class="h-16 w-16 object-cover md:h-32 md:w-32"
					src={config.images[post.img]}
				/>
			</div>
		{/if}
	</div>
</li>
