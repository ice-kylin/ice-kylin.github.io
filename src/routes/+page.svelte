<script lang="ts">
	import { color, isMainColor } from '$lib/store/color';
	import * as config from '$lib/config';
	import Cover from '$lib/cover.svelte';
	import Main from '$lib/main.svelte';
	import Footer from '$lib/footer.svelte';
	import Post from '$lib/main/Post.svelte';
	import { onDestroy } from 'svelte';

	export let data;

	let box: HTMLDivElement;

	function parseScroll() {
		isMainColor.set(
			config.color == undefined || box.scrollTop >= box.clientHeight * 0.8
		);
	}

	color.set(config.color);
	if (config.color != undefined) {
		isMainColor.set(false);
	}

	onDestroy(() => {
		isMainColor.set(true);
	});
</script>

<div
	bind:this={box}
	class="h-dvh overflow-scroll md:snap-y md:snap-mandatory"
	on:scroll={parseScroll}
>
	<Cover />
	<div
		class="grid min-h-screen grid-rows-[1fr_auto] pb-1.5 md:snap-start md:pb-3 md:pt-3"
	>
		<Main>
			{#each data.posts as post}
				<Post {post}></Post>
			{/each}
		</Main>
		<Footer />
	</div>
</div>
