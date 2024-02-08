<script lang="ts">
	import { isMainColor } from '$lib/store/color';
	import { isClose } from '$lib/store/header';
	import Nav from './nav.svelte';
	import HeaderInfo from '$lib/component/headerInfo.svelte';
	import clsx from 'clsx';
</script>

<header
	class={clsx(
		'fixed inset-0 z-40 flex-col justify-between overflow-scroll px-6 pb-7 pt-16 transition-colors duration-1000 md:bottom-3 md:left-3 md:top-3 md:w-52 md:py-12',
		$isMainColor
			? 'bg-main md:border-r md:border-dotted md:border-r-outlineVariant md:bg-inherit'
			: 'bg-current',
		$isClose ? 'hidden md:flex' : 'flex'
	)}
>
	<Nav />
	<HeaderInfo />
</header>
