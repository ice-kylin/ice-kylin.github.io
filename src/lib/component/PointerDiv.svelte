<script lang="ts">
	import { pointer } from '$lib/store/pointer';

	export let full: boolean = false;
	export let color: string | undefined = undefined;
	export let radius: string | undefined = undefined;

	let element: HTMLDivElement;
	let t: number;
	let l: number;
	let w: number;
	let h: number;

	function getPosition() {
		const rect = element.getBoundingClientRect();

		t = rect.top;
		l = rect.left;
	}

	function handleMouseEnter() {
		getPosition();

		pointer.set({
			isMouseOver: true,
			full,
			w,
			h,
			t,
			l,
			color,
			radius
		});
	}

	function handleMouseLeave() {
		pointer.set({
			isMouseOver: false
		});
	}
</script>

<div
	bind:clientHeight={h}
	bind:clientWidth={w}
	bind:this={element}
	class="w-fit"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	role="presentation"
>
	<slot />
</div>
