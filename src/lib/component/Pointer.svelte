<script lang="ts">
	import { isMouseOver } from '$lib/store/pointer';
	import { isMainColor } from '$lib/store/color';
	import isMob from '$lib/store/mob';
	import mousePosition from '$lib/store/mousePosition';
	import clsx from 'clsx';
</script>

{#if !$isMob.isMob}
	<div
		class={clsx(
			'pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2  transition-[border-radius,width,height] duration-300',
			$isMouseOver ? 'h-12 w-12 rounded-3xl' : 'h-5 w-5 rounded-[10px]',
			$isMainColor ? 'bg-main' : 'bg-white'
		)}
		style={`top: ${$mousePosition.y}px; left: ${$mousePosition.x}px;`}
	/>
{/if}
