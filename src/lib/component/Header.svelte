<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let label: string;

	import PointerDiv from '$lib/component/PointerDiv.svelte';
</script>

<div
	class="flex flex-col md:flex-row md:justify-between md:items-center font-art md:flex-wrap gap-2"
>
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<span class="small-caps text-3xl">{subtitle}</span>
			<slot />
		</div>
		<PointerDiv><span class="small-caps text-5xl">{title}</span></PointerDiv
		>
	</div>
	<div class="pr-6">
		<PointerDiv>
			<p class="fs small-caps whitespace-nowrap">{label}</p>
		</PointerDiv>
	</div>
</div>
