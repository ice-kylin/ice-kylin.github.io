<script lang="ts">
	import isTop from '$lib/store/isTop';
	import Button from '$lib/component/Button.svelte';
	import { Icon } from 'svelte-icon';
	import homeRoof from '@mdi/svg/svg/home-roof.svg?raw';
	import inboxMultipleOutline from '@mdi/svg/svg/inbox-multiple-outline.svg?raw';
	import clockTimeTwelveOutline from '@mdi/svg/svg/clock-time-twelve-outline.svg?raw';
	import tag from '@mdi/svg/svg/tag-outline.svg?raw';
	import imageFilterHdrOutline from '@mdi/svg/svg/image-filter-hdr-outline.svg?raw';
	import link from '@mdi/svg/svg/link.svg?raw';
	import rss from '@mdi/svg/svg/rss.svg?raw';
	import cardsPlayingOutline from '@mdi/svg/svg/cards-playing-outline.svg?raw';
	import PointerDiv from '$lib/component/PointerDiv.svelte';
	import { page } from '$app/stores';

	function comparePath(p1: string | null, p2: string) {
		if (!p1) {
			return false;
		}

		if (p1 == p2) {
			return true;
		}

		if (p2 == '/') {
			return false;
		}

		return p1.startsWith(p2);
	}

	let items = [
		{
			label: '主页',
			icon: homeRoof,
			link: '/'
		},
		{
			label: '分类',
			icon: inboxMultipleOutline,
			link: '/category'
		},
		{
			label: '时间轴',
			icon: clockTimeTwelveOutline,
			link: '/time'
		},
		{
			label: '标签',
			icon: tag,
			link: '/tag'
		},
		{
			label: '照片',
			icon: imageFilterHdrOutline,
			link: '/photo'
		},
		{
			label: '友链',
			icon: link,
			link: '/link'
		},
		{
			label: 'RSS',
			icon: rss,
			link: '/about'
		},
		{
			label: 'About',
			icon: cardsPlayingOutline,
			link: '/about'
		}
	];

	$: activeTextColor = $isTop.isTop
		? 'text-onSurfaceContainer'
		: 'text-white';
	$: activeBackgroundColor = $isTop.isTop ? 'bg-surfaceContainer' : '';
	$: inactiveTextColor = $isTop.isTop ? 'text-onSurface' : 'text-white';
</script>

<header
	class={`fixed top-0 left-0 right-0 mt-6 z-10 ${$isTop.isTop ? '' : 'mix-blend-difference'}`}
>
	<nav class="max-w-screen-2xl mx-auto flex gap-2 overflow-scroll">
		<div class="w-4 md:w-10 shrink-0"></div>
		{#each items as item}
			<PointerDiv full radius="rounded-full">
				<a href={item.link}>
					<Button
						label={item.label}
						types="ghost"
						backgroundColorClass={comparePath(
							$page.route.id,
							item.link
						)
							? activeBackgroundColor
							: ''}
						textColorClass={$page.route.id?.startsWith(item.link)
							? activeTextColor
							: inactiveTextColor}
					>
						<Icon
							data={item.icon}
							size="18px"
							stroke="transparent"
							slot="icon"
						></Icon>
					</Button>
				</a>
			</PointerDiv>
		{/each}
		<div class="w-4 md:w-10 shrink-0"></div>
	</nav>
</header>
