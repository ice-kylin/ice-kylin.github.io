<script lang="ts">
	import { clsx } from 'clsx';
	import { Icon } from 'svelte-icon';
	import { isClose } from '$lib/store/header';
	import Logo from './logo.svelte';
	import dotsGrid from '@mdi/svg/svg/dots-grid.svg?raw';
	import github from '@mdi/svg/svg/github.svg?raw';
	import Theme from './theme.svelte';

	function toggle() {
		isClose.update((v) => !v);
	}

	function close() {
		isClose.set(true);
	}

	const links = [
		{ name: '主页', href: '/' },
		{ name: '分类', href: '/category' },
		{ name: '标签', href: '/tag' },
		{ name: '时间轴', href: '/timeline' },
		{ name: '画廊', href: '/gallery' },
		{ name: '友情链接', href: '/links' },
		{ name: '关于', href: '/about' }
	];
</script>

<div
	class={clsx(
		'fixed left-0 right-0 top-0 z-50 border-b border-b-outlineVariant backdrop-blur-md',
		$isClose ? 'bg-wb/75' : 'bg-wb'
	)}
>
	<header
		class={clsx(
			'mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-2xl text-onBackground md:border-b-0',
			!$isClose && 'border-b border-b-outlineVariant'
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
		<a class="hidden md:block" href="/">
			<Icon data={github} size="24px" stroke="transparent" />
		</a>
		<button class="md:hidden" on:click={toggle}>
			<Icon data={dotsGrid} size="24px" stroke="transparent" />
		</button>
	</header>
	<nav
		class={clsx(
			'mx-auto max-w-screen-xl items-center justify-between px-6 text-onBackground md:hidden',
			$isClose && 'hidden'
		)}
	>
		<ol>
			{#each links as link}
				<li class="py-4">
					<a href={link.href} on:click={close}>{link.name}</a>
				</li>
			{/each}
		</ol>
		<div class="py-8">
			<button
				class="premium w-full rounded-md px-6 py-3.5 font-semibold leading-4 text-background"
				>Github
			</button>
			<Theme />
		</div>
	</nav>
</div>
