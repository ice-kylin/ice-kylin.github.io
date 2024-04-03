<script lang="ts">
	import Slogan from '$lib/home/slogan.svelte';
	import Header from '$lib/component/header.svelte';
	import Banner from '$lib/home/banner.svelte';
	import Posts from '$lib/home/recent-posts.svelte';
	import Tags from '$lib/home/tags.svelte';
	import Category from '$lib/home/category.svelte';
	import type { LayoutData } from './$types';
	import { TITLE } from '$lib/config';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{TITLE}</title>
</svelte:head>

<Slogan />
<Header />
<Banner />
<!--suppress JSUnresolvedReference -->
<Posts posts={data.posts} />
<!--suppress JSUnresolvedReference -->
<Tags tags={data.tags} />
<Category category={data.categories[0]} />
<Category category={data.categories[1]} />
<Category category={data.categories[2]} />
