<script lang="ts">
	import type { PostPreview2 } from '$lib/types';
	import { API_URL_CLIENT } from '$lib/utils';
	import AuthorMD from '$lib/home/author-md.svelte';

	export let post: PostPreview2;
</script>

<article
	class="col-span-12 border-b border-b-surfaceContainerHigh py-6 md:grid md:grid-cols-12 md:gap-x-12 md:border-b-0"
>
	<a class="md:hidden" href={`/${post.slug}`}>
		<div class="aspect-video overflow-hidden">
			<div
				class="h-full w-full bg-cover bg-center transition duration-300 hover:scale-105"
				style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
			/>
		</div>
	</a>
	<div class="col-span-12 pt-6 md:col-span-4">
		<a
			class="night bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
		<h2
			class="line-clamp-2 text-pretty pt-0.5 text-2xl font-bold hover:text-main hover:underline md:text-3xl"
		>
			<a href={`/${post.slug}`}>{post.title}</a>
		</h2>
		<p class="line-clamp-3 text-pretty pt-3 text-onSurfaceVariant">
			{post.description}
		</p>
		<AuthorMD {post} />
	</div>
	<a class="hidden shrink-0 md:col-span-8 md:block" href={`/${post.slug}`}>
		<div class="aspect-video overflow-hidden">
			<div
				class="h-full w-full bg-cover bg-center transition duration-300 hover:scale-105"
				style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
			/>
		</div>
	</a>
</article>
