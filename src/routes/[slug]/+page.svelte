<script lang="ts">
	import { formatDate, getDate, getRelativeTimeDifference } from '$lib/utils';
	import Layout from '$lib/layout.svelte';
	import Dot from '$lib/component/Dot.svelte';
	import { onMount } from 'svelte';

	export let data;

	const date = getDate(data.meta.date);
	let timeDiff: string = '';

	onMount(() => {
		timeDiff = getRelativeTimeDifference(date);
	});
</script>

<Layout>
	<article class="overflow-scroll px-6 pt-16 md:px-12">
		<h1 class="text-3xl font-bold">{data.meta.title}</h1>
		<div class="mt-6 text-sm text-onSurfaceVariant">
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex flex-wrap items-center gap-2">
					<span class="font-num">{formatDate(date)}</span>
					<Dot color="main"></Dot>
					<span class="font-num text-main">{timeDiff}</span>
				</div>
				<div class="flex flex-wrap items-center gap-2">
					{#each data.meta.categories as category, i}
						<a href="/" class="hover:underline">{category}</a>
						{#if i !== data.meta.categories.length - 1}>{/if}
					{/each}
					<Dot color="main" />
					{#each data.meta.tags as tag}
						<a href="/" class="text-main hover:underline"
							>#&nbsp;{tag}</a
						>
					{/each}
				</div>
			</div>
		</div>
		<div class="pattern mt-6 p-3.5 text-sm">
			<h2 class="font-bold text-main">内容提要</h2>
			<p class="mt-2 text-onSurfaceVariant">
				{data.meta.description}
			</p>
		</div>
		<div class="prose prose-m3 mt-7 max-w-none prose-pre:rounded-none">
			<svelte:component this={data.content} />
		</div>
	</article>
</Layout>
