<script lang="ts">
	import { DISPLAY } from '$lib/config';
	import { clsx } from 'clsx';
	import { Icon } from 'svelte-icon';
	import { isClose } from '$lib/store/header';
	import { page } from '$app/stores';
	import Logo from './logo.svelte';
	import dotsGrid from '@mdi/svg/svg/dots-grid.svg?raw';
	import closeIcon from '@mdi/svg/svg/close.svg?raw';
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
		{ name: '友链', href: '/links' },
		{ name: '关于', href: '/about' }
	];
</script>

<div
	class="fixed left-0 right-0 top-0 z-40 border-b border-b-surfaceContainerHigh bg-wb/75 backdrop-blur-md md:border-b"
>
	<header
		class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-onBackground"
	>
		<div class="flex items-center gap-2">
			<Logo class="text-main" />
			<span class="text-outline">/</span>
			<a class="font-mono text-xl font-bold hover:underline" href="/"
				>{DISPLAY}</a
			>
		</div>
		<nav
			class="mr-6 hidden grow border-r border-r-surfaceContainerHigh pr-6 md:block"
		>
			<ol class="flex justify-end gap-6 text-base font-medium">
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
			<Icon
				data={$isClose ? dotsGrid : closeIcon}
				size="24px"
				stroke="transparent"
			/>
		</button>
	</header>
	<div
		class={clsx('mx-6 h-px bg-surfaceContainerHigh', $isClose && 'hidden')}
	/>
	<nav
		class={clsx(
			'flex overflow-auto text-sm md:hidden',
			$isClose && 'hidden'
		)}
	>
		{#each links as link}
			<a
				href={link.href}
				class={clsx(
					'flex h-12 w-[90px] shrink-0 flex-col items-center justify-center py-3.5 font-medium',
					$page.url.pathname === link.href &&
						'border-b-2 border-main text-main'
				)}
				on:click={close}
			>
				{link.name}
			</a>
		{/each}
	</nav>
</div>
