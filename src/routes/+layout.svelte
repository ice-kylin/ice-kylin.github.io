<script lang="ts">
	import '../app.css';
	import '../font.css';
	import { Button } from 'mood-ui';
	import { Icon } from 'svelte-icon';
	import homeRoof from '@mdi/svg/svg/home-roof.svg?raw';
	import inboxMultipleOutline from '@mdi/svg/svg/inbox-multiple-outline.svg?raw';
	import clockTimeTwelveOutline from '@mdi/svg/svg/clock-time-twelve-outline.svg?raw';
	import imageFilterHdrOutline from '@mdi/svg/svg/image-filter-hdr-outline.svg?raw';
	import link from '@mdi/svg/svg/link.svg?raw';
</script>

<div class="flex gap-2 overflow-scroll mt-6">
	<div class="w-4 md:w-10 shrink-0"></div>
	<Button
		label="主页"
		types="primary"
		size="md"
		backgroundColorClass="bg-surfaceContainer"
		textColorClass="text-onSurfaceContainer"
	>
		<Icon data={homeRoof} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="分类" types="ghost" size="md" textColorClass="text-onSurface">
		<Icon data={inboxMultipleOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="时间轴" types="ghost" size="md" textColorClass="text-onSurface">
		<Icon data={clockTimeTwelveOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="照片" types="ghost" size="md" textColorClass="text-onSurface">
		<Icon data={imageFilterHdrOutline} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
	<Button label="友情链接" types="ghost" size="md" textColorClass="text-onSurface">
		<Icon data={link} size="18px" stroke="transparent" slot="icon"></Icon>
	</Button>
</div>

<div class="px-6 md:px-12 pt-7 pb-6 flex flex-col gap-7">
	<slot />
	<footer>
		<p class="font-serif text-2xl">ICEKYLIN’S BLOG</p>
	</footer>
</div>
