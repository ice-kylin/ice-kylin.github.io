<script lang="ts">
	import Slogan from '$lib/home/slogan.svelte';
	import Header from '$lib/component/header.svelte';
	import Banner from '$lib/home/banner.svelte';
	import Posts from '$lib/home/posts.svelte';
	import Tags from '$lib/home/tags.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Slogan />
<Header
	bgColor="rgb(var(--md-sys-color-on-background) / var(--tw-text-opacity))"
	color="rgb(var(--md-sys-color-background) / var(--tw-text-opacity))"
	slashColor="rgb(var(--md-sys-color-outline-variant) / var(--tw-text-opacity))"
/>
<Banner />
<main class="relative -top-20 -mb-20">
	<Posts />
</main>
<Tags tags={data.tags} />
