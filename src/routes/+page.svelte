<script lang="ts">
	import Main from './main.svelte';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import img from '../assets/photos/IMG_20240122_154122931.webp?enhanced';
	import SelfIntros from '$lib/component/SelfIntros.svelte';
	import Posts from '$lib/component/Posts.svelte';
	import { formatDate } from '$lib/utils';
	import ScrollingBanner from '$lib/component/ScrollingBanner.svelte';
	import Title from '$lib/component/Title.svelte';

	export let data;
</script>

<enhanced:img alt="icekylin" class="pt-12 sm:hidden" src={img} />
<Main>
	<div class="hidden sm:block">
		<Title />
	</div>
	<div class="flex flex-col gap-7 sm:gap-12 md:flex-row">
		<InfoImg
			clz="md:basis-3/5 hidden sm:block"
			description="&copy; icekylin."
			title="Birmingham, United Kingdom, 2/1/2024."
		>
			<enhanced:img
				alt="icekylin"
				class="transition-all duration-300 hover:scale-105"
				src={img}
			/>
		</InfoImg>
		<div class="block sm:hidden">
			<Title />
		</div>
		<SelfIntros />
	</div>
	<ScrollingBanner text="Articles, Sharing, Notes, Diaries, B$." />
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each data.posts as post, i}
			<Posts
				title={post.title}
				img={post.img}
				description={post.description}
				date={formatDate(post.date)}
				left={i % 2 === 0}
			/>
		{/each}
	</div>
</Main>
