<script lang="ts">
	export let types:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'ghost'
		| 'danger'
		| 'gradient' = 'primary';
	export let backgroundColorClass: string | undefined = undefined;
	export let textColorClass: string | undefined = undefined;
	export let label: string = '';

	$: bgColorClass = backgroundColorClass
		? backgroundColorClass
		: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				tertiary: 'border-solid border border-outline',
				ghost: '',
				danger: 'bg-error',
				gradient: 'shadow'
			}[types];
	$: textColorClass = textColorClass
		? textColorClass
		: {
				primary: 'text-onPrimary',
				secondary: 'text-onSecondary',
				tertiary: 'text-primary',
				ghost: 'text-primary',
				danger: 'text-onError',
				gradient: 'text-white'
			}[types];
	$: styleClass = `flex w-max items-center tracking-[.1px] whitespace-nowrap ${bgColorClass} ${textColorClass} rounded-full pl-4 pr-5 py-2.5 text-sm`;

</script>

<div class={styleClass}>
	<slot name="icon" />
	<div class="pl-2 font-bold">
		{label}
	</div>
</div>
