<script lang="ts">
	import PostSM from '$lib/home/post-sm.svelte';
	import PostMD from '$lib/home/post-md.svelte';
	import PostLG from '$lib/home/post-lg.svelte';
	import type { PostPreview1 } from '$lib/types';
	import { clsx } from 'clsx';

	export let intent: 'main' | 'left' | 'right' = 'main';
	export let posts: PostPreview1[];

	$: ps1 = posts.slice(1, 4);
	$: ps2 = posts.slice(4, 6);
</script>

<section class="mx-auto grid max-w-screen-xl grid-cols-12 px-6 lg:gap-16">
	{#if intent === 'right'}
		<div class={clsx('col-span-12 lg:col-span-5')}>
			{#each ps1 as post, i}
				<PostSM {post} last={i === ps1.length - 1} />
			{/each}
		</div>
	{/if}
	{#if posts[0]}
		<PostLG post={posts[0]} />
	{/if}
	{#if intent !== 'right'}
		<div
			class={clsx(
				'col-span-12 lg:col-span-5',
				intent === 'main' && 'lg:pt-20'
			)}
		>
			{#each ps1 as post, i}
				<PostSM {post} last={i === ps1.length - 1} />
			{/each}
		</div>
	{/if}
	{#if intent === 'main'}
		{#each ps2 as post, i}
			<PostMD {post} last={i === 1} />
		{/each}
	{/if}
</section>
