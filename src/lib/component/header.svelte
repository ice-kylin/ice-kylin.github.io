<script lang="ts">
	import { Icon } from 'svelte-icon';
	import cardsDiamondOutline from '@mdi/svg/svg/cards-diamond-outline.svg?raw';
	import dotsGrid from '@mdi/svg/svg/dots-grid.svg?raw';

	export let bgColor = '';
	export let color =
		'rgb(var(--md-sys-color-onBackground) / var(--tw-text-opacity))';
	export let slashColor =
		'rgb(var(--md-sys-color-outline) / var(--tw-text-opacity))';

	$: varStyles = `--bg:${bgColor}; --color:${color}; --slashColor:${slashColor}`;
</script>

<div class="header-wrapper border-b border-b-outlineVariant" style={varStyles}>
	<header
		class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-2xl"
	>
		<div class="flex gap-2">
			<Icon data={cardsDiamondOutline} size="32px" stroke="transparent" />
			<span class="slash">/</span>
			<a class="font-bold hover:underline" href="/">Blog</a>
		</div>
		<Icon data={dotsGrid} size="24px" stroke="transparent" />
	</header>
</div>

<style>
	.header-wrapper {
		background-color: var(--bg);
	}

	header {
		color: var(--color);
	}

	.slash {
		color: var(--slashColor);
	}
</style>
