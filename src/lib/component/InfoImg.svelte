<script lang="ts">
	import PointerDiv from '$lib/component/PointerDiv.svelte';

	export let title: string;
	export let description: string;
	export let clz: string = '';
</script>

<div class={`fs max-w-3xl ${clz}`}>
	<PointerDiv>
		<div class="overflow-hidden">
			<slot />
		</div>
	</PointerDiv>
	<p class="mt-2">{title}</p>
	<p>{description}</p>
</div>
