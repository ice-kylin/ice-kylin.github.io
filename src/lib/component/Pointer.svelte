<script lang="ts">
	import { pointer } from '$lib/store/pointer';
	import isMob from '$lib/store/isMob';
	import mousePosition from '$lib/store/mousePosition';

	$: sizeClass = $pointer.isMouseOver
		? 'w-12 h-12 rounded-3xl'
		: 'w-5 h-5 rounded-[10px]';
</script>

{#if !$isMob.isMob}
	<div
		class={`${sizeClass} pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 bg-main transition-[border-radius,width,height] duration-300`}
		style={`top: ${$mousePosition.y}px; left: ${$mousePosition.x}px;`}
	/>
{/if}
