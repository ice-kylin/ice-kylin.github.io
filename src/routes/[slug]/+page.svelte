<script lang="ts">
	import { formatDate, getDate, getRelativeTimeDifference } from '$lib/utils';
	import Layout from '$lib/layout.svelte';
	import Dot from '$lib/component/Dot.svelte';
	import Categories from '$lib/component/Categories.svelte';
	import Tags from '$lib/component/Tags.svelte';
	import { onMount } from 'svelte';

	export let data;

	const date = getDate(data.meta.date);
	let timeDiff: string = '';

	onMount(() => {
		timeDiff = getRelativeTimeDifference(date);
	});
</script>

<Layout>
	<article class="px-6 pt-12">
		<h1 class="text-3xl font-bold">{data.meta.title}</h1>
		<div class="mt-6 text-sm text-onSurfaceVariant">
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex items-center gap-2">
					<span class="font-num">{formatDate(date)}</span>
					<Dot color="main"></Dot>
					<span class="font-num text-main">{timeDiff}</span>
				</div>
				<div class="flex items-center gap-2">
					<Categories categories={data.meta.categories} />
					<Dot color="main"></Dot>
					<div class="flex gap-2 text-main">
						<Tags tags={data.meta.tags} />
					</div>
				</div>
			</div>
		</div>
		<div class="prose prose-m3 mt-7 max-w-none">
			<svelte:component this={data.content} />
		</div>
	</article>
</Layout>
