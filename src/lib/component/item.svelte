<script lang="ts">
	import clsx from 'clsx';

	export let wide: boolean;
</script>

<li
	class={clsx(
		'w-full border-b border-dotted border-b-outlineVariant py-3',
		wide ? 'md:flex-[1_0_calc(100%_/_2)]' : 'md:flex-[1_0_calc(100%_/_3)]'
	)}
>
	<div
		class="flex h-full items-center justify-between gap-2 border-l border-dotted border-l-outlineVariant px-6 lg:gap-3"
	>
		<slot />
	</div>
</li>
