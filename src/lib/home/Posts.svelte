<script lang="ts">
	import { Icon } from 'svelte-icon';
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import PointerDiv from '$lib/component/PointerDiv.svelte';
</script>

<section class="mx-6 mb-6 mt-12 flex flex-col gap-6 overflow-hidden">
	<ul class="relative -left-6 right-6 flex w-[calc(100%+48px)] flex-wrap">
		<slot />
	</ul>
	<PointerDiv>
		<a href="/">
			<div
				class="flex items-center gap-3 bg-onBackground px-3 py-2 text-xs font-bold text-background"
			>
				<Icon data={arrowRight} size="16px" stroke="transparent" />
				查看更多
			</div>
		</a>
	</PointerDiv>
</section>
