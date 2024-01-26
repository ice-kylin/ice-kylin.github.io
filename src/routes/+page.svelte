<script lang="ts">
	import img from '../assets/photos/IMG_20240122_154122931.webp';
	import icekylin from '../assets/photos/icekylin.webp';
	import icekylin2 from '../assets/photos/icekylin_2.webp';
	import Sparkles from '$lib/icon/Sparkles.svelte';
	import SelfIntros from '$lib/component/SelfIntros.svelte';
	import PointerDiv from '$lib/component/PointerDiv.svelte';
</script>

<div class="flex justify-between items-center font-art flex-wrap">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<span class="small-caps text-3xl">Hi, I'm</span>
			<Sparkles></Sparkles>
		</div>
		<PointerDiv><span class="small-caps text-5xl">IceKylin</span></PointerDiv>
	</div>
	<div class="pr-6">
		<PointerDiv>
			<p class="fs small-caps whitespace-nowrap">Code Changes The World.</p>
		</PointerDiv>
	</div>
</div>

<div class="flex flex-col md:flex-row gap-12">
	<div class="max-w-3xl fs md:basis-3/5">
		<PointerDiv>
			<div class="overflow-hidden">
				<img class="hover:scale-105 transition-all duration-300" src={img} alt="icekylin" />
			</div>
		</PointerDiv>
		<p class="mt-2">Birmingham, United Kingdom, 2/1/2024.</p>
		<p>&copy; icekylin.</p>
	</div>
	<SelfIntros></SelfIntros>
</div>

<div class="flex flex-col md:flex-row gap-12">
	<div class="max-w-3xl fs md:basis-2/5 md:mt-16">
		<img src={icekylin} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
	<div class="max-w-3xl fs md:basis-3/5 md:mt-64">
		<img src={icekylin2} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
</div>
