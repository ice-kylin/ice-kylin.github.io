<script lang="ts">
	import PointerDiv from '$lib/component/PointerDiv.svelte';

	export let src: string;
	export let alt: string;
	export let title: string;
	export let description: string;
	export let clz: string = '';
</script>

<div class={`max-w-3xl fs ${clz}`}>
	<PointerDiv>
		<div class="overflow-hidden">
			<img
				{alt}
				class="hover:scale-105 transition-all duration-300"
				loading="lazy"
				{src}
			/>
		</div>
	</PointerDiv>
	<p class="mt-2">{title}</p>
	<p>{description}</p>
</div>
