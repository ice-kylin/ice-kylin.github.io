<script lang="ts">
	import { API_URL_CLIENT } from '$lib/utils.js';
</script>

<div
	class="col-span-12 border-b border-b-outlineVariant py-6 lg:col-span-7 lg:border-b-0"
>
	<div
		class="aspect-video bg-cover"
		style={`background-image: url("${API_URL_CLIENT}/uploads/neom_1_ec17438d6a.jpg");`}
	/>
	<div class="pt-6">
		<a
			class="bg-gradient-to-r from-[#AC32E4] from-0% via-[#7918F2] via-[48%] to-[#4801FF] bg-clip-text text-sm font-bold text-transparent"
			href="/">生活</a
		>
	</div>
	<a
		class="line-clamp-2 text-pretty pt-1 text-2xl font-bold leading-tight hover:text-main hover:underline md:text-5xl md:leading-tight md:underline-offset-8"
		href="/"
	>
		基金取消净值估算，有什么影响？会不会影响基金的收益？
	</a>
	<p class="line-clamp-3 text-pretty pt-3 text-onSurfaceVariant">
		从病虫害探测、土壤墒情监测智能系统，再到耕、种、管、收等智能机器人，近几年来，越来越多具有自主知识产权的新技术、智能产品开始出现在农业...
	</p>
	<div class="flex flex-wrap items-center justify-between gap-2 pt-6">
		<div class="flex items-center gap-3.5">
			<a href="/">
				<div
					class="h-10 w-10 rounded-full bg-cover"
					style={`background-image: url("${API_URL_CLIENT}/uploads/icekylin_d4c9956a44.webp");`}
				></div>
			</a>
			<a class="font-bold" href="/">icekylin</a>
		</div>
		<span class="font-mono text-onSurfaceVariant">February 8, 2024</span>
	</div>
</div>
