<script lang="ts">
	import { Icon } from 'svelte-icon';
	import { isMainColor } from '$lib/store/color';
	import { isClose } from '$lib/store/header';
	import homeRoof from '@mdi/svg/svg/home-roof.svg?raw';
	import packageVariant from '@mdi/svg/svg/package-variant.svg?raw';
	import tagOutline from '@mdi/svg/svg/tag-outline.svg?raw';
	import clockTimeThreeOutline from '@mdi/svg/svg/clock-time-three-outline.svg?raw';
	import imageFilterHdrOutline from '@mdi/svg/svg/image-filter-hdr-outline.svg?raw';
	import emoticonKissOutline from '@mdi/svg/svg/emoticon-kiss-outline.svg?raw';
	import cardsPlayingOutline from '@mdi/svg/svg/cards-playing-outline.svg?raw';
	import clsx from 'clsx';

	const links = [
		{
			href: '/',
			text: '主页',
			icon: homeRoof
		},
		{
			href: '/',
			text: '分类',
			icon: packageVariant
		},
		{
			href: '/',
			text: '标签',
			icon: tagOutline
		},
		{
			href: '/',
			text: '时间线',
			icon: clockTimeThreeOutline
		},
		{
			href: '/',
			text: '画廊',
			icon: imageFilterHdrOutline
		},
		{
			href: '/',
			text: '友链',
			icon: emoticonKissOutline
		},
		{
			href: '/',
			text: '关于',
			icon: cardsPlayingOutline
		}
	];
</script>

<nav>
	<ul
		class={clsx(
			'text-lg transition-colors duration-1000 md:text-base',
			(!$isMainColor || !$isClose) && 'text-white'
		)}
	>
		{#each links as link}
			<li class="mt-6">
				<a
					href={link.href}
					class={clsx(
						'flex items-center gap-3.5 after:w-full after:border-t after:border-dotted after:transition-colors after:duration-1000',
						$isMainColor
							? $isClose
								? 'after:border-surfaceContainerHighest'
								: 'after:border-white'
							: 'after:border-white'
					)}
				>
					<div class="hidden w-max md:block">
						<Icon data={link.icon} size="18px" stroke="transparent"
						></Icon>
					</div>
					<div class="w-max md:hidden">
						<Icon data={link.icon} size="24px" stroke="transparent"
						></Icon>
					</div>
					<span class="w-max whitespace-nowrap font-bold"
						>{link.text}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
