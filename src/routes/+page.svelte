<script lang="ts">
	// import Slogan from '$lib/home/slogan.svelte';
	import Header from '$lib/component/header.svelte';
	import Banner from '$lib/home/banner.svelte';
	import Posts from '$lib/home/posts.svelte';
	import Tags from '$lib/home/tags.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<!--<Slogan />-->
<Header
	bgColor="rgb(var(--md-sys-color-on-background) / var(--tw-text-opacity))"
	color="rgb(var(--md-sys-color-background) / var(--tw-text-opacity))"
	slashColor="rgb(var(--md-sys-color-outline-variant) / var(--tw-text-opacity))"
/>
<Banner />
<!--suppress JSUnresolvedReference -->
<Posts posts={data.posts} />
<!--suppress JSUnresolvedReference -->
<Tags tags={data.tags} />
<section class="mx-auto max-w-screen-xl p-6">
	<div
		class="border-b border-t-[5px] border-b-outlineVariant border-t-onBackground py-3 text-xl font-bold"
	>
		生活
	</div>
</section>
