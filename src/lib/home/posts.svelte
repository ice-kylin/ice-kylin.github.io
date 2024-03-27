<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import PostLG from '$lib/home/post-lg.svelte';
	import PostSM from '$lib/home/post-sm.svelte';
	import PostMD from '$lib/home/post-md.svelte';

	export let posts: PostPreview[];

	$: ps = posts.slice(1, 4);
</script>

<div class="relative -top-20 -mb-20">
	<section class="mx-auto grid max-w-screen-xl grid-cols-12 px-6 lg:gap-16">
		<PostLG post={posts[0]} />
		<div class="col-span-12 lg:col-span-5 lg:pt-20">
			{#each ps as post, i}
				<PostSM {post} last={i === ps.length - 1} />
			{/each}
		</div>
		{#each posts.slice(4, 6) as post, i}
			<PostMD {post} last={i === 1} />
		{/each}
	</section>
</div>
