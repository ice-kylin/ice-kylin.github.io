<script lang="ts">
	import isTop from '$lib/store/isTop';
	import { Button } from 'mood-ui';
	import { Icon } from 'svelte-icon';
	import homeRoof from '@mdi/svg/svg/home-roof.svg?raw';
	import inboxMultipleOutline from '@mdi/svg/svg/inbox-multiple-outline.svg?raw';
	import clockTimeTwelveOutline from '@mdi/svg/svg/clock-time-twelve-outline.svg?raw';
	import imageFilterHdrOutline from '@mdi/svg/svg/image-filter-hdr-outline.svg?raw';
	import link from '@mdi/svg/svg/link.svg?raw';

	$: activeTextColor = $isTop.isTop ? 'text-onSurfaceContainer' : 'text-white';
	$: activeBackgroundColor = `transition-colors duration-300 ${
		$isTop.isTop ? 'bg-surfaceContainer' : ''
	}`;
	$: inactiveTextColor = $isTop.isTop ? 'text-onSurface' : 'text-white';
</script>

<div class={`fixed flex gap-2 overflow-scroll mt-6 ${$isTop.isTop ? '' : 'mix-blend-difference'}`}>
	<div class="w-4 md:w-10 shrink-0"></div>
	<Button
		label="主页"
		types="ghost"
		size="md"
		backgroundColorClass={activeBackgroundColor}
		textColorClass={activeTextColor}
	>
		<Icon data={homeRoof} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="分类" types="ghost" size="md" textColorClass={inactiveTextColor}>
		<Icon data={inboxMultipleOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="时间轴" types="ghost" size="md" textColorClass={inactiveTextColor}>
		<Icon data={clockTimeTwelveOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="照片" types="ghost" size="md" textColorClass={inactiveTextColor}>
		<Icon data={imageFilterHdrOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="友情链接" types="ghost" size="md" textColorClass={inactiveTextColor}>
		<Icon data={link} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
</div>
