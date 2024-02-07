<script lang="ts">
	import { Icon } from 'svelte-icon';
	import Items from '$lib/component/items.svelte';
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
</script>

<section class="mx-6 mb-6 mt-12 flex flex-col gap-6 overflow-hidden">
	<Items>
		<slot />
	</Items>
	<a class="w-fit" href="/">
		<div
			class="flex items-center gap-3 bg-onBackground px-3 py-2 text-xs font-bold text-background hover:bg-main hover:text-background"
		>
			<Icon data={arrowRight} size="16px" stroke="transparent" />
			查看更多
		</div>
	</a>
</section>
