<script lang="ts">
	import Party from '$lib/icon/Party.svelte';
	import Header from '$lib/component/Header.svelte';
	import img from '../../assets/photos/IMG_20230118_084459.jpg';
	import InfoImg from '$lib/component/InfoImg.svelte';
	import Friend from '$lib/component/Friend.svelte';
</script>

<Header title="Friends" subtitle="Hey! See my" label="Auld Lang Syne.">
	<Party></Party>
</Header>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<InfoImg
		src={img}
		alt="icekylin"
		clz="md:basis-2/5"
		title="Birmingham, United Kingdom, 18/1/2023."
		description="&copy; icekylin."
	></InfoImg>
	<div class="md:pt-64 md:basis-3/5">
		<div class="flex flex-col gap-7">
			<span class="font-art text-2xl small-caps">Europe</span>
			<div
				class="grid gap-x-6 gap-y-7 grid-cols-[repeat(auto-fill,minmax(256px,1fr))]"
			>
				{#each [1, 2, 3, 4] as i}
					<Friend
						name="KevinZonda"
						description="我的伯明翰大学同学"
						link="https://kevinzonda.com"
						githubLink="https://github.com/KevinZonda"
					></Friend>
				{/each}
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col md:flex-row gap-7 sm:gap-12">
	<div class="md:pt-16 md:basis-3/5">
		<div class="flex flex-col gap-7">
			<span class="font-art text-2xl small-caps">Global</span>
			<div
				class="grid gap-x-6 gap-y-7 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
			>
				{#each [1, 2, 3, 4] as i}
					<Friend
						name="KevinZonda"
						description="我的伯明翰大学同学"
						link="https://kevinzonda.com/"
					></Friend>
				{/each}
			</div>
		</div>
	</div>
	<InfoImg
		src={img}
		alt="icekylin"
		clz="md:pt-32 md:basis-2/5"
		title="Birmingham, United Kingdom, 18/1/2023."
		description="&copy; icekylin."
	></InfoImg>
</div>
