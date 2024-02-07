<script lang="ts">
	import { formatDate, getDate, getRelativeTimeDifference } from '$lib/utils';
	import Dot from '$lib/component/dot.svelte';
	import { onMount } from 'svelte';

	export let meta: {
		title: string;
		date: string;
		categories: string[];
		tags: string[];
		description: string;
	};

	const date = getDate(meta.date);
	let timeDiff: string = '';

	onMount(() => {
		timeDiff = getRelativeTimeDifference(date);
	});
</script>

<h1 class="text-3xl font-bold">{meta.title}</h1>
<div class="mt-6 text-sm text-onSurfaceVariant">
	<div class="flex flex-col gap-2 text-sm">
		<div class="flex flex-wrap items-center gap-x-2">
			<span class="font-num">{formatDate(date)}</span>
			<Dot color="main"></Dot>
			<span class="font-num text-main">{timeDiff}</span>
		</div>
		<div class="flex flex-wrap items-center gap-x-2">
			{#each meta.categories as category, i}
				<a href="/" class="hover:underline">{category}</a>
				{#if i !== meta.categories.length - 1}>{/if}
			{/each}
			<Dot color="main" />
			{#each meta.tags as tag}
				<a href="/" class="text-main hover:underline">#&nbsp;{tag}</a>
			{/each}
		</div>
	</div>
</div>
<div class="pattern mt-6 p-3.5 text-sm">
	<h2 class="font-bold text-main">内容提要</h2>
	<p class="mt-2 text-onSurfaceVariant">
		{meta.description}
	</p>
</div>
