<script lang="ts">
	import isMob from '$lib/store/isMob';
	import mousePosition from '$lib/store/mousePosition';
	import { pointer } from '$lib/store/pointer';

	$: overFull = $pointer.isMouseOver && $pointer.full;
	$: sizeClass = $pointer.isMouseOver
		? $pointer.full
			? $pointer.radius
			: 'w-12 h-12 rounded-3xl'
		: 'w-5 h-5 rounded-[10px]';
	$: translateClass = overFull ? '' : '-translate-x-1/2 -translate-y-1/2';
	$: transitionClass = overFull
		? 'transition-all'
		: 'transition-[border-radius,width,height]';
	$: sizeStyle = overFull
		? `width: ${$pointer.w}px; height: ${$pointer.h}px;`
		: '';
	$: mouseStyle = overFull
		? `top: ${$pointer.t}px; left: ${$pointer.l}px;`
		: `top: ${$mousePosition.y}px; left: ${$mousePosition.x}px;`;
</script>

{#if !$isMob.isMob}
	<div
		class={`${sizeClass} ${translateClass} ${transitionClass} z-50 duration-300 bg-white fixed mix-blend-exclusion pointer-events-none`}
		style={`${mouseStyle} ${sizeStyle}`}
	/>
{/if}
