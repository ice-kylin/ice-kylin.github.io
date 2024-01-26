<script lang="ts">
	import img from '../assets/photos/IMG_20240122_154122931.webp';
	import icekylin from '../assets/photos/icekylin.webp';
	import icekylin2 from '../assets/photos/icekylin_2.webp';
	import Sparkles from '$lib/icon/Sparkles.svelte';
	import SelfIntros from '$lib/component/SelfIntros.svelte';
</script>

<div class="flex justify-between items-center font-art flex-wrap">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<span class="small-caps text-3xl">Hi, I'm</span>
			<Sparkles></Sparkles>
		</div>
		<span class="small-caps text-5xl">IceKylin</span>
	</div>
	<div class="pr-6">
		<p class="font-serif small-caps whitespace-nowrap">Code Changes The World.</p>
	</div>
</div>

<div class="flex flex-col md:flex-row gap-12">
	<div class="max-w-3xl font-serif md:basis-3/5">
		<img src={img} alt="icekylin" />
		<p class="mt-2">Birmingham, United Kingdom, 2/1/2024.</p>
		<p>&copy; icekylin.</p>
	</div>
	<SelfIntros></SelfIntros>
</div>

<div class="flex flex-col md:flex-row gap-12">
	<div class="max-w-3xl font-serif md:basis-2/5 md:mt-16">
		<img src={icekylin} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
	<div class="max-w-3xl font-serif md:basis-3/5 md:mt-64">
		<img src={icekylin2} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
</div>
