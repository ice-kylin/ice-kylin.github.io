<script lang="ts">
	import Header from '$lib/component/Header.svelte';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import img from '../assets/photos/IMG_20240122_154122931.webp';
	import icekylin from '../assets/photos/icekylin.webp';
	import icekylin2 from '../assets/photos/icekylin_2.webp';
	import Sparkles from '$lib/icon/Sparkles.svelte';
	import SelfIntros from '$lib/component/SelfIntros.svelte';
</script>

<Header title="IceKylin" subtitle="Hi, I'm" label="Code Changes The World.">
	<Sparkles></Sparkles>
</Header>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<InfoImg
		src={img}
		alt="icekylin"
		clz="md:basis-3/5"
		title="Birmingham, United Kingdom, 2/1/2024."
		description="&copy; icekylin."
	></InfoImg>
	<SelfIntros></SelfIntros>
</div>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<div class="max-w-3xl fs md:basis-2/5 md:mt-16">
		<img src={icekylin} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
	<div class="max-w-3xl fs md:basis-3/5 md:mt-64">
		<img src={icekylin2} alt="icekylin" />
		<p class="mt-2">&copy; 荻pote.</p>
	</div>
</div>
