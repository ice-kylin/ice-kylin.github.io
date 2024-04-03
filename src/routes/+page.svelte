<script lang="ts">
	// import Slogan from '$lib/home/slogan.svelte';
	import Header from '$lib/component/header.svelte';
	import Banner from '$lib/home/banner.svelte';
	import RecentPosts from '$lib/home/recent-posts.svelte';
	import Tags from '$lib/home/tags.svelte';
	import Category from '$lib/home/category.svelte';
	import type { PageData } from './$types';
	import { TITLE } from '$lib/config';

	export let data: PageData;
</script>

<svelte:head>
	<title>{TITLE}</title>
</svelte:head>

<!--<Slogan />-->
<Header />
<Banner />
<!--suppress JSUnresolvedReference -->
<RecentPosts posts={data.posts} />
<!--suppress JSUnresolvedReference -->
<Category category={data.categories[0]} intent="right" />
<Tags tags={data.tags} />
<Category category={data.categories[1]} intent="left" />
<Category category={data.categories[2]} intent="right" />
