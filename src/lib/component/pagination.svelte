<script lang="ts">
	import type { PaginationPage } from '$lib/types';
	import { clsx } from 'clsx';

	export let pagination: PaginationPage;

	let pages: string[] = [];
	$: if (pagination.pageCount > 1 && pagination.pageCount < 5) {
		pages = Array.from({ length: pagination.pageCount }, (_, i) =>
			(i + 1).toString()
		);
	}
</script>

{#if pagination.pageCount !== 1}
	<div class="mx-auto max-w-screen-xl px-6">
		<ul
			class="flex flex-wrap items-center justify-center gap-2 border-t border-t-outlineVariant pt-6 font-mono text-sm"
		>
			<li class="text-outline">&lt; PREV</li>
			{#each pages as page}
				<li class={clsx('h-9 w-9 text-center leading-9')}>{page}</li>
			{/each}
			<li class="text-main">NEXT &gt;</li>
		</ul>
	</div>
{/if}
