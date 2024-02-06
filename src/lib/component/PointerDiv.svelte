<script lang="ts">
	import type { Icon } from '$lib/store/pointer';
	import { icon, isMouseOver } from '$lib/store/pointer';
	import { onDestroy } from 'svelte';

	let i: Icon = null;

	function handleMouseEnter() {
		isMouseOver.set(true);
		icon.set(i);
	}

	function handleMouseLeave() {
		isMouseOver.set(false);
		icon.set(null);
	}

	onDestroy(handleMouseLeave);
</script>

<div
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	role="presentation"
>
	<slot />
</div>
