<script lang="ts">
	import Layout from '$lib/component/layout.svelte';
	import Post from '$lib/post/Post.svelte';
	import SideTitle from '$lib/component/SideTitle.svelte';

	export let data;
</script>

<Layout>
	<div class="overflow-scroll lg:grid lg:grid-cols-[1fr_300px]">
		<article class="my-16 overflow-scroll px-6 md:px-12">
			<Post meta={data.meta}></Post>
			<div class="prose prose-m3 mt-7 max-w-none prose-pre:rounded-none">
				<svelte:component this={data.content} />
			</div>
		</article>
		<aside
			class="my-16 flex flex-col gap-6 px-6 py-3 lg:border-l lg:border-dotted lg:border-l-outlineVariant"
		>
			<SideTitle>分类</SideTitle>
			<SideTitle>分类</SideTitle>
			<SideTitle>日历</SideTitle>
		</aside>
	</div>
</Layout>
