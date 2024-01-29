<script lang="ts">
	export let title: string;
	export let description: string;
	export let date: string;
	export let img: string;
	export let clz: string = '';
	export let left: boolean = false;

	$: directionOuterClass = left ? 'flex-row-reverse text-right' : '';
</script>

<div
	class={`flex justify-between gap-8 md:flex-row md:text-left ${directionOuterClass} ${clz}`}
>
	<div class="flex flex-col justify-center gap-2">
		<p
			class="line-clamp-2 font-bold text-onSurfaceVariant underline decoration-primary md:text-xl"
		>
			{title}
		</p>
		<p class="line-clamp-3 text-sm md:text-base">{description}</p>
		<p class="font-mono text-xs text-onSurfaceVariant md:text-sm">{date}</p>
	</div>
	<img
		src={img}
		alt={title}
		loading="lazy"
		decoding="async"
		class="h-32 w-32 shrink-0 rounded-full object-cover md:h-48 md:w-48 md:rounded-none"
	/>
</div>
