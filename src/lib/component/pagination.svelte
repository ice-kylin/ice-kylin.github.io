<script lang="ts">
	import type { PaginationPage } from '$lib/types';
	import { clsx } from 'clsx';

	export let pagination: PaginationPage;

	let pages: string[] = [];
	$: if (pagination.pageCount > 1 && pagination.pageCount < 6) {
		pages = Array.from({ length: pagination.pageCount }, (_, i) =>
			(i + 1).toString()
		);
	} else if (pagination.page < 4) {
		pages = ['1', '2', '3', '.', pagination.pageCount.toString()];
	} else if (pagination.page > pagination.pageCount - 3) {
		pages = [
			'1',
			'.',
			(pagination.pageCount - 2).toString(),
			(pagination.pageCount - 1).toString(),
			pagination.pageCount.toString()
		];
	} else {
		pages = [
			'1',
			'.',
			pagination.page.toString(),
			'.',
			pagination.pageCount.toString()
		];
	}
	$: prev = pagination.page > 1;
	$: next = pagination.page < pagination.pageCount;
</script>

{#if pagination.pageCount !== 1}
	<div class="mx-auto max-w-screen-xl px-6">
		<div
			class="flex flex-wrap items-center justify-center gap-2 border-t border-t-outlineVariant pt-6 font-mono text-sm"
		>
			<a
				href={prev
					? `./${(pagination.page - 1).toString()}`
					: 'javascript:;'}
				class={clsx('px-2', prev ? 'text-main' : 'text-outline')}
				>&lt; PREV</a
			>
			{#each pages as page}
				<a
					href={page === '.' ? 'javascript:;' : `./${page}`}
					class={clsx(
						'h-9 w-9 text-center leading-9',
						pagination.page.toString() === page
							? 'border-b-4 border-b-main'
							: 'hover:border-b-4 hover:border-b-surfaceContainerHigh'
					)}>{page}</a
				>
			{/each}
			<a
				href={next
					? `./${(pagination.page + 1).toString()}`
					: 'javascript:;'}
				class={clsx(
					'px-2',
					next ? 'text-main hover:underline' : 'text-outline'
				)}>NEXT &gt;</a
			>
		</div>
	</div>
{/if}
