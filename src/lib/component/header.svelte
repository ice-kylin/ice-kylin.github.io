<script lang="ts">
	import { Icon } from 'svelte-icon';
	import cardsDiamondOutline from '@mdi/svg/svg/cards-diamond-outline.svg?raw';
	import dotsGrid from '@mdi/svg/svg/dots-grid.svg?raw';
</script>

<div
	class="fixed left-0 right-0 top-0 z-50 border-b border-b-outlineVariant bg-wb/75 backdrop-blur-md"
>
	<header
		class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-2xl text-onBackground"
	>
		<div class="flex gap-2">
			<Icon data={cardsDiamondOutline} size="32px" stroke="transparent" />
			<span class="text-outline">/</span>
			<a class="font-bold hover:underline" href="/">Blog</a>
		</div>
		<Icon data={dotsGrid} size="24px" stroke="transparent" />
	</header>
</div>
