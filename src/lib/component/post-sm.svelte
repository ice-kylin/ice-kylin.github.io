<script lang="ts">
	import type { PostPreview2 } from '$lib/types';
	import { clsx } from 'clsx';
	import { API_URL_CLIENT } from '$lib/utils.js';
	import AuthorSM from './author-sm.svelte';

	export let post: PostPreview2;
	export let last = false;
</script>

<article
	class={clsx(
		'col-span-12 border-surfaceContainerHigh py-6 md:col-span-4 md:border-b-0 md:border-t',
		!last && 'border-b'
	)}
>
	<a href={`/${post.slug}`}>
		<div class="aspect-video overflow-hidden">
			<div
				class="h-full w-full bg-cover bg-center transition duration-300 hover:scale-105"
				style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
			/>
		</div>
	</a>
	<h2 class="pt-4">
		<a
			class="night bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
	</h2>
	<a
		class="line-clamp-2 text-pretty pt-1 text-xl font-bold hover:text-main hover:underline"
		href={`/${post.slug}`}
	>
		{post.title}
	</a>
	<p class="line-clamp-3 text-pretty pt-3 text-sm text-onSurfaceVariant">
		{post.description}
	</p>
	<AuthorSM {post} />
</article>
