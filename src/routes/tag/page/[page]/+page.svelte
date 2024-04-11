<script lang="ts">
	import type { PageData } from './$types';
	import Title from '$lib/component/title.svelte';
	import Header from '$lib/component/header.svelte';
	import Pagination from '$lib/component/pagination.svelte';

	export let data: PageData;
</script>

<Header />
<Title subtitle="标签" title="Tags" total={data.pagination.total} />
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
