<script lang="ts">
	import { isClose } from '$lib/store/header';
	import { DISPLAY } from '$lib/config';
	import { Icon } from 'svelte-icon';
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

<div {...$$props} class="border-b border-b-outline bg-onSurface">
	<header
		class="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 text-surface"
	>
		<div class="flex items-center gap-2 text-2xl">
			<Logo class="text-inversePrimary" />
			<span class="text-outline">/</span>
			<a class="font-bold hover:underline" href="/">{DISPLAY}</a>
		</div>
		<nav class="mr-6 hidden grow border-r border-r-outline pr-6 md:block">
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
			class="hidden text-surfaceVariant hover:text-surface md:block"
		/>
		<button class="md:hidden" on:click={toggle}>
			<Icon
				data={$isClose ? dotsGrid : closeIcon}
				size="24px"
				stroke="transparent"
			/>
		</button>
	</header>
</div>
