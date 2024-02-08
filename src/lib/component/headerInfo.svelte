<script lang="ts">
	import { isMainColor } from '$lib/store/color';
	import * as config from '$lib/config';
	import LangButton from '$lib/component/langButton.svelte';
	import DarkModeButton from '$lib/component/darkModeButton.svelte';
	import RSSLink from '$lib/component/rss.svelte';
	import clsx from 'clsx';
</script>

<div
	class={clsx(
		'flex h-full flex-col justify-center gap-6 md:h-auto',
		$isMainColor ? 'text-onPrimary md:text-onBackground' : 'text-white'
	)}
>
	<a href="/">
		<h1 class={clsx('fa', $isMainColor && 'md:text-main')}>
			{config.title}
		</h1>
	</a>
	<p class={clsx('text-xs', $isMainColor && 'md:text-onSurfaceVariant')}>
		没有 ICP 备案号<br />访问量：<span class="font-num">0</span>
	</p>
	<div class="flex gap-3">
		<RSSLink />
		<LangButton />
		<DarkModeButton />
	</div>
</div>
