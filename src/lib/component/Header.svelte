<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let label: string;

	import PointerDiv from '$lib/component/PointerDiv.svelte';
</script>

<div
	class="flex flex-col gap-2 font-art md:flex-row md:flex-wrap md:items-center md:justify-between"
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
