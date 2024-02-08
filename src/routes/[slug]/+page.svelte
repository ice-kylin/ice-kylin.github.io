<script lang="ts">
	import Layout from '$lib/component/layout.svelte';
	import Post from '$lib/post/post.svelte';
	import Aside from '$lib/component/aside.svelte';

	export let data;
</script>

<Layout>
	<main class="overflow-scroll lg:grid lg:grid-cols-[1fr_256px]">
		<article class="my-28 overflow-scroll px-[18px] md:my-16 md:px-12">
			<Post meta={data.meta}></Post>
			<div
				class="prose prose-m3 mt-7 max-w-none prose-headings:mt-6 prose-pre:rounded-none"
			>
				<svelte:component this={data.content} />
			</div>
		</article>
		<Aside tagInfos={data.tagInfos} />
	</main>
</Layout>
