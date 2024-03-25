<script lang="ts">
	import { API_URL_CLIENT } from '$lib/utils.js';
	import type { PostPreview } from '$lib/types';
	import AuthorLG from '$lib/home/author-lg.svelte';

	export let post: PostPreview;
</script>

<article
	class="col-span-12 border-b border-b-outlineVariant py-6 lg:col-span-7 lg:border-b-0"
>
	<a href={`/${post.slug}`}>
		<div
			class="aspect-video bg-cover"
			style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
		/>
	</a>
	<h2 class="pt-6">
		<a
			class="bg-gradient-to-r from-[#AC32E4] from-0% via-[#7918F2] via-[48%] to-[#4801FF] bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
	</h2>
	<a
		class="line-clamp-2 text-pretty pt-1 text-2xl font-bold leading-tight hover:text-main hover:underline md:text-5xl md:leading-tight md:underline-offset-8"
		href={`/${post.slug}`}
	>
		{post.title}
	</a>
	<p class="line-clamp-3 text-pretty pt-3 text-onSurfaceVariant">
		{post.description}
	</p>
	<AuthorLG {post} />
</article>
