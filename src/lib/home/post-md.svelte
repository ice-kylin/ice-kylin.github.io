<script lang="ts">
	import { API_URL_CLIENT } from '$lib/utils.js';
	import type { PostPreview } from '$lib/types';
	import AuthorMD from '$lib/home/author-md.svelte';
	import { clsx } from 'clsx';

	export let post: PostPreview;
	export let last = false;
</script>

<article
	class={clsx(
		'col-span-12 border-outlineVariant py-6 lg:col-span-6 lg:border-b-0 lg:border-t',
		!last && 'border-b'
	)}
>
	<a href={`/${post.slug}`}>
		<div
			class="aspect-video bg-cover"
			style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
		/>
	</a>
	<h2 class="pt-6">
		<a
			class="night bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
	</h2>
	<a
		class="line-clamp-2 text-pretty pt-1 text-xl font-bold hover:text-main hover:underline md:text-3xl"
		href={`/${post.slug}`}
	>
		{post.title}
	</a>
	<p class="line-clamp-3 text-pretty pt-3 text-onSurfaceVariant">
		{post.description}
	</p>
	<AuthorMD {post} />
</article>
