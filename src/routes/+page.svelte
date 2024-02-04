<script lang="ts">
	import { color, isMainColor } from '$lib/store/color';
	import * as config from '$lib/config';
	import Dot from '$lib/component/Dot.svelte';

	let box: HTMLDivElement;

	function parseScroll() {
		isMainColor.set(
			config.color == undefined || box.scrollTop >= box.clientHeight * 0.8
		);
	}

	color.set(config.color);
	if (config.color != undefined) {
		isMainColor.set(false);
	}
</script>

<div
	bind:this={box}
	class="mr-1.5 h-screen overflow-scroll md:ml-[220px] md:mr-3 md:snap-y md:snap-mandatory"
	on:scroll={parseScroll}
>
	<div class="relative md:snap-start">
		<enhanced:img
			alt="Spring Festival 2024"
			class="h-dvh object-cover"
			src={config.cover}
		/>
		<div
			class="absolute bottom-[60px] left-6 flex flex-col gap-6 text-white"
		>
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex items-center gap-2">
					<p>
						<span class="font-num">2024</span> 年
						<span class="font-num">2</span>
						月 <span class="font-num">4</span> 日
					</p>
					<Dot color="white"></Dot>
					<p><span class="font-num">2</span> 天前</p>
				</div>
				<div class="flex items-center gap-2">
					<p>生活 > 乱七八糟</p>
					<Dot color="white"></Dot>
					<p># 标签</p>
					<Dot color="white"></Dot>
					<p># 标签</p>
					<Dot color="white"></Dot>
					<p># 标签</p>
				</div>
			</div>
			<h1 class="text-3xl font-bold">2024 新春快乐</h1>
		</div>
	</div>
	<div class="min-h-screen md:snap-start"></div>
</div>
