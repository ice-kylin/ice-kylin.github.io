<script lang="ts">
	import Header from '$lib/component/Header.svelte';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import img3 from '../assets/photos/IMG_20240122_154122931.webp';
	import img2 from '../assets/images/1.webp';
	import img from '../assets/images/2.webp';
	import Sparkles from '$lib/icon/Sparkles.svelte';
	import SelfIntros from '$lib/component/SelfIntros.svelte';
</script>

<Header label="Code Changes The World." subtitle="Hi, I'm" title="IceKylin">
	<Sparkles></Sparkles>
</Header>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<InfoImg
		alt="icekylin"
		clz="md:basis-3/5"
		description="&copy; icekylin."
		src={img3}
		title="Birmingham, United Kingdom, 2/1/2024."
	/>
	<SelfIntros />
</div>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<InfoImg
		alt="荻pote"
		clz="mt-16 md:basis-2/5"
		description=""
		src={img2}
		title="&copy; 荻pote."
	/>
	<InfoImg
		alt="荻pote"
		clz="mt-64 md:basis-3/5"
		description=""
		src={img}
		title="&copy; 荻pote."
	/>
</div>
