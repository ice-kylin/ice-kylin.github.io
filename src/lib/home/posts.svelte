<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import PostLG from '$lib/home/post-lg.svelte';
	import PostXS from '$lib/home/post-xs.svelte';

	export let posts: PostPreview[];
</script>

<section>
	<div class="mx-auto grid max-w-screen-xl grid-cols-12 px-6 lg:gap-16">
		<PostLG post={posts[0]} />
		<div class="col-span-12 lg:col-span-5 lg:pt-20">
			{#each posts.slice(1, 5) as post}
				<PostXS {post} />
			{/each}
		</div>
	</div>
</section>
