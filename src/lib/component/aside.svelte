<script lang="ts">
	import type { TagInfo } from '$lib/types';
	import Dot from '$lib/component/dot.svelte';
	import SideTitle from '$lib/component/sideTitle.svelte';

	export let tagInfos: TagInfo[];
</script>

<aside class="pattern flex flex-col gap-6 px-6 py-6 lg:bg-none lg:py-16">
	<SideTitle>分类</SideTitle>
	<SideTitle>标签</SideTitle>
	<ul class="flex flex-wrap items-center gap-x-2">
		{#each tagInfos as tagInfo, i}
			<li>
				<a
					href={`/`}
					class="text-sm text-onSurfaceVariant hover:text-main hover:underline"
					># {tagInfo.name}
					<span class="font-num">{tagInfo.total}</span>
				</a>
			</li>
			{#if i < tagInfos.length - 1}
				<Dot />
			{/if}
		{/each}
	</ul>
</aside>
