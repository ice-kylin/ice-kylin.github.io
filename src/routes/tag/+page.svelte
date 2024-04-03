<script lang="ts">
	import Header from '$lib/component/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const is = Array.from({ length: 5 }, (_, index) => index + 1);
</script>

<Header />
<div class="mx-auto max-w-screen-xl px-6">
	<div
		class="border-b border-b-outlineVariant pb-10 pt-[88px] md:pb-12 md:pt-28"
	>
		<p>所有标签</p>
		<h1 class="text-3xl font-bold md:text-5xl">Tags</h1>
	</div>
</div>
<ul
	class="mx-auto max-w-screen-xl px-6 flex flex-wrap gap-x-4 gap-y-2 py-6 text-lg text-main "
>
	{#each data.tags as tag}
		<li>
			<a href={`/tags/${tag.slug}`} class="hover:underline"># {tag.tag}</a
			>
		</li>
	{/each}
</ul>
<div class="mx-auto max-w-screen-xl px-6">
	<ul class="font-mono text-sm flex flex-wrap gap-2 items-center justify-center pt-6 border-t-outlineVariant border-t">
		<li class="text-outline">&lt; PREV</li>
		{#each is as i}
			<li class="w-9 h-9 text-center leading-9">{i}</li>
		{/each}
		<li class="text-main">NEXT &gt;</li>
	</ul>
</div>
