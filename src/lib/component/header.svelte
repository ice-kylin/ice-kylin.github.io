<script lang="ts">
	import { clsx } from 'clsx';
	import { Icon } from 'svelte-icon';
	import { isClose } from '$lib/store/header';
	import Logo from './logo.svelte';
	import dotsGrid from '@mdi/svg/svg/dots-grid.svg?raw';
	import Github from './github.svelte';

	function toggle() {
		isClose.update((v) => !v);
	}

	function close() {
		isClose.set(true);
	}

	const links = [
		{ name: '主页', href: '/' },
		{ name: '分类', href: '/category' },
		{ name: '标签', href: '/tag/page/1' },
		{ name: '归档', href: '/timeline/page/1' },
		{ name: '画廊', href: '/gallery' },
		{ name: '友链', href: '/links' },
		{ name: '关于', href: '/about' }
	];
</script>

<div
	class={clsx(
		'fixed left-0 right-0 top-0 z-40 border-b-surfaceContainerHigh bg-wb/75 backdrop-blur-md md:border-b',
		$isClose && 'border-b'
	)}
>
	<header
		class={clsx(
			'mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-2xl text-onBackground md:border-b-0',
			!$isClose && 'border-b border-b-surfaceContainerHigh'
		)}
	>
		<div class="flex gap-2">
			<Logo />
			<span class="text-outline">/</span>
			<a class="font-bold hover:underline" href="/">Blog</a>
		</div>
		<nav
			class="mr-6 hidden grow border-r border-r-outlineVariant pr-6 text-base md:block"
		>
			<ol class="flex justify-end gap-6">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="hover:underline"
							on:click={close}>{link.name}</a
						>
					</li>
				{/each}
			</ol>
		</nav>
		<Github
			class="hidden text-onSurfaceVariant hover:text-onSurface md:block"
		/>
		<button class="md:hidden" on:click={toggle}>
			<Icon data={dotsGrid} size="24px" stroke="transparent" />
		</button>
	</header>
</div>
<nav
	class={clsx(
		'fixed right-0 top-0 z-50 mx-auto max-w-screen-xl items-center justify-between bg-surfaceContainer px-4 text-sm text-onBackground md:hidden',
		$isClose && 'hidden'
	)}
>
	<ol class="font-semibold">
		{#each links as link}
			<li class="py-3">
				<a href={link.href} on:click={close}>{link.name}</a>
			</li>
		{/each}
	</ol>
	<div
		class="mt-6 rounded-lg bg-surfaceContainerLow px-4 py-3 text-xs text-onSurfaceVariant"
	>
		Appearance
	</div>
	<div class="flex justify-center gap-4 pt-6">
		<Github class="text-onSurfaceVariant" />
	</div>
</nav>
