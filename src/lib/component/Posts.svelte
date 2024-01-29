<script lang="ts">
	export let title: string;
	export let description: string;
	export let date: string;
	export let img: string;
	export let clz: string = '';
</script>

<div class={`flex justify-between gap-8 ${clz}`}>
	<div class="flex flex-col gap-2">
		<p class="text-xl text-onSurfaceVariant font-bold">{title}</p>
		<p>{description}</p>
		<p class="text-sm text-onSurfaceVariant font-mono">{date}</p>
	</div>
	<div class="w-32 h-32 md:w-48 md:h-48 shrink-0">
		<enhanced:img src={img} alt="" loading="lazy" />
	</div>
</div>
