<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/component/header.svelte';
	import Pagination from '$lib/component/pagination.svelte';
	import Title from '$lib/component/title.svelte';
	import PostLG from '$lib/component/post-lg.svelte';
	import PostSM from '$lib/component/post-sm.svelte';

	export let data: PageData;
	$: p = data.posts[0];
	$: ps = data.posts.slice(1);
</script>

<Header />
<Title subtitle="标签" title={data.tag} total={data.pagination.total} />
<section class="mx-auto grid max-w-screen-xl grid-cols-12 px-6 md:gap-x-12">
	<PostLG post={p} />
	{#each ps as post, i}
		<PostSM {post} last={ps.length - 1 === i} />
	{/each}
</section>
<Pagination pagination={data.pagination} />
