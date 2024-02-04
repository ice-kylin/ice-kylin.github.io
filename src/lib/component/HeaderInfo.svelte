<script lang="ts">
	import { isMainColor } from '$lib/store/color';
	import { isClose } from '$lib/store/header';
	import * as config from '$lib/config';
	import LangButton from '$lib/component/LangButton.svelte';
	import DarkModeButton from '$lib/component/DarkModeButton.svelte';
	import RSSLink from '$lib/component/RSSLink.svelte';
	import clsx from 'clsx';
</script>

<div
	class={clsx(
		'flex h-full flex-col justify-center gap-6 md:h-auto',
		(!$isMainColor || !$isClose) && 'text-white'
	)}
>
	<h1
		class={clsx(
			'fa transition-colors duration-1000',
			$isMainColor && $isClose && 'text-main'
		)}
	>
		{config.title}
	</h1>
	<p
		class={clsx(
			'text-xs transition-colors duration-1000',
			$isMainColor && $isClose && 'text-onSurfaceVariant'
		)}
	>
		粤 ICP 备案 01202 号<br />访问量：<span class="font-num">0</span>
	</p>
	<div class="flex gap-3 transition-colors duration-1000">
		<RSSLink />
		<LangButton />
		<DarkModeButton />
	</div>
</div>
