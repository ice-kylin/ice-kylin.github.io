<script lang="ts">
	import Party from '$lib/icon/Party.svelte';
	import Header from '$lib/component/Header.svelte';
	import img from '../../assets/images/3.webp?enhanced';
	import img2 from '../../assets/photos/IMG_20230118_084459.webp?enhanced';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import Friend from '$lib/component/Friend.svelte';
</script>

<Header label="Auld Lang Syne." subtitle="Hey! See my" title="Friends">
	<Party></Party>
</Header>

<div class="flex flex-col gap-7 sm:gap-12 md:flex-row">
	<InfoImg clz="md:basis-2/5" description="" title="&copy; 荻pote.">
		<enhanced:img
			src={img}
			alt="荻pote"
			class="transition-all duration-300 hover:scale-105"
		/>
	</InfoImg>
	<div class="md:basis-3/5 md:pt-64">
		<div class="flex flex-col gap-7">
			<span class="small-caps font-art text-2xl">Global</span>
			<div
				class="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-x-6 gap-y-7"
			>
				<Friend
					description="我的伯明翰大学同学"
					githubLink="https://github.com/KevinZonda"
					link="https://kevinzonda.com"
					name="KevinZonda"
				></Friend>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col gap-7 sm:gap-12 md:flex-row">
	<div class="md:basis-2/5 md:pt-16">
		<div class="flex flex-col gap-7">
			<span class="small-caps font-art text-2xl">China</span>
			<div
				class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-6 gap-y-7"
			></div>
		</div>
	</div>
	<InfoImg
		clz="md:basis-3/5"
		description="&copy; icekylin."
		title="Birmingham, United Kingdom, 2/1/2024."
	>
		<enhanced:img
			src={img2}
			alt="icekylin"
			class="transition-all duration-300 hover:scale-105"
		/>
	</InfoImg>
</div>
