<script lang="ts">
	import { Icon } from 'svelte-icon';
	import { isMainColor } from '$lib/store/color';
	import { isClose } from '$lib/store/header';
	import * as config from '$lib/config';
	import iceCream from '@mdi/svg/svg/ice-cream.svg?raw';
	import MobileHeaderButton from '$lib/component/MobileHeaderButton.svelte';
	import clsx from 'clsx';
</script>

<div
	class={clsx(
		'fixed left-0 top-0 z-50 flex h-10 w-full flex-row-reverse items-center justify-between px-2 transition-colors duration-1000 md:hidden',
		$isMainColor ? 'bg-main text-onPrimary' : 'bg-current text-white'
	)}
>
	<MobileHeaderButton></MobileHeaderButton>
	<div class={clsx('items-center gap-2.5', $isClose ? 'flex' : 'hidden')}>
		<Icon data={iceCream} size="20px" stroke="transparent" />
		<span class="fa mt-1">{config.title}</span>
	</div>
</div>
