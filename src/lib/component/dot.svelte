<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	const dot = cva('h-1 w-1', {
		variants: {
			color: {
				white: 'bg-white',
				main: 'bg-main',
				outline: 'bg-outlineVariant'
			}
		}
	});

	interface $$Props extends VariantProps<typeof dot> {}

	export let color: $$Props['color'] = 'main';
</script>

<div {...$$props} class={dot({ color, class: $$props.class })}></div>
