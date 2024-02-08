<script lang="ts">
	import '../app.css';
	import '../font.css';
	import '@fontsource-variable/inter';
	import '@fontsource/magra/400.css';
	import '@fontsource/magra/700.css';
	import type { VariantProps } from 'class-variance-authority';
	import { cva } from 'class-variance-authority';
	import { color, isMainColor } from '$lib/store/color';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import Header from '$lib/component/header.svelte';
	import MobileHeader from '$lib/component/mobileHeader.svelte';

	type MaskProps = VariantProps<typeof mask>;
	type Dir = MaskProps['dir'];
	const mask = cva('fixed z-30 transition-colors duration-1000', {
		variants: {
			dir: {
				bottom: 'bottom-0 right-0 h-1.5 w-full md:h-3',
				left: 'left-0 top-0 h-screen w-1.5 md:w-3',
				right: 'right-0 top-0 h-screen w-1.5 md:w-3',
				top: 'left-0 top-0 hidden h-1.5 w-full md:block md:h-3'
			},
			color: {
				main: 'bg-main',
				current: 'bg-current'
			}
		}
	});

	const dirs: Dir[] = ['left', 'top', 'right', 'bottom'];

	$: style = $isMainColor ? '' : `--current: ${$color};`;
</script>

<div class="px-1.5 md:pl-[220px] md:pr-3" {style}>
	{#each dirs as dir}
		<div
			class={mask({ dir, color: $isMainColor ? 'main' : 'current' })}
		></div>
	{/each}
	<!--<Pointer></Pointer>-->
	<SvelteTheme></SvelteTheme>
	<MobileHeader />
	<Header />
	<slot />
</div>
