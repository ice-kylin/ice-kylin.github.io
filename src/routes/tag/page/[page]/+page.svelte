<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/component/header.svelte';
	import Pagination from '$lib/component/pagination.svelte';

	export let data: PageData;
</script>

<Header />
<div class="mx-auto max-w-screen-xl px-6">
	<div
		class="border-b border-b-surfaceContainerHigh pb-10 pt-[88px] md:pb-12 md:pt-28"
	>
		<p>标签</p>
		<h1 class="text-3xl font-bold md:text-5xl">
			Tags
			<sub class="text-base">{data.pagination.total}</sub>
		</h1>
	</div>
</div>
<ul
	class="mx-auto flex max-w-screen-xl flex-wrap gap-x-4 gap-y-2 px-6 py-6 text-lg text-main"
>
	{#each data.tags as tag}
		<li>
			<a href={`/tag/${tag.slug}/page/1`} class="hover:underline"
				># {tag.tag}</a
			>
		</li>
	{/each}
</ul>
<Pagination pagination={data.pagination} />
