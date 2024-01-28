<script lang="ts">
	import Party from '$lib/icon/Party.svelte';
	import Header from '$lib/component/Header.svelte';
	import img from '../../assets/images/3.webp';
	import img2 from '../../assets/photos/IMG_20230118_084459.webp';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import Friend from '$lib/component/Friend.svelte';
</script>

<Header label="Auld Lang Syne." subtitle="Hey! See my" title="Friends">
	<Party></Party>
</Header>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<InfoImg
		alt="荻pote"
		clz="md:basis-2/5"
		description=""
		src={img}
		title="&copy; 荻pote."
	></InfoImg>
	<div class="md:pt-64 md:basis-3/5">
		<div class="flex flex-col gap-7">
			<span class="font-art text-2xl small-caps">Global</span>
			<div
				class="grid gap-x-6 gap-y-7 grid-cols-[repeat(auto-fill,minmax(256px,1fr))]"
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

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<div class="md:pt-16 md:basis-2/5">
		<div class="flex flex-col gap-7">
			<span class="font-art text-2xl small-caps">China</span>
			<div
				class="grid gap-x-6 gap-y-7 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
			></div>
		</div>
	</div>
	<InfoImg
		alt="icekylin"
		clz="md:pt-32 md:basis-3/5"
		description="&copy; icekylin."
		src={img2}
		title="Birmingham, United Kingdom, 18/1/2023."
	></InfoImg>
</div>
