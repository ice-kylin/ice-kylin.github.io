<script lang="ts">
	import { color as c, isMainColor } from '$lib/store/color';
	import Footer from '$lib/footer.svelte';
	import { onDestroy } from 'svelte';
	import clsx from 'clsx';

	export let cover: boolean = false;
	export let color: string | undefined = undefined;

	let box: HTMLDivElement;

	function parseScroll() {
		isMainColor.set(box.scrollTop >= box.clientHeight * 0.8);
	}

	onDestroy(() => {
		isMainColor.set(true);
	});

	if (color != undefined) {
		c.set(color);
		isMainColor.set(false);
	}
</script>

<div
	bind:this={box}
	class={clsx(
		cover && 'h-screen overflow-scroll md:snap-y md:snap-mandatory'
	)}
	on:scroll={color !== undefined ? parseScroll : null}
>
	<slot name="cover" />
	<div
		class={clsx(
			'grid min-h-screen grid-rows-[1fr_auto] pb-1.5 md:pb-3 md:pt-3',
			cover && 'md:snap-start'
		)}
	>
		<slot />
		<Footer />
	</div>
</div>
