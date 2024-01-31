<script lang="ts">
	import Main from '../main.svelte';

	export let data;
</script>

<Main>
	<h1 class="mt-16 text-4xl underline decoration-primary">
		{data.meta.title}
	</h1>
	<p>{data.meta.description}</p>
	<div class="max-w-3xl">
<!--	<img alt="icekylin" src={data.meta.img} loading="lazy" decoding="async" />-->
	<article class="prose prose-m3 mt-7">
		<svelte:component this={data.content} />
	</article>
	</div>
</Main>
