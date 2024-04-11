<script lang="ts">
	import type { PostPreview1 } from '$lib/types';
	import { API_URL_CLIENT } from '$lib/utils';
	import { clsx } from 'clsx';
	import AuthorSM from '$lib/home/author-sm.svelte';

	export let post: PostPreview1;
	export let last = false;
</script>

<article
	class={clsx(
		'grid grid-cols-12 gap-0 border-b border-b-surfaceContainerHigh py-6 md:flex md:gap-7 lg:grid lg:grid-cols-12',
		last && 'lg:border-b-0'
	)}
>
	<a
		class="col-span-12 shrink-0 md:w-1/3 md:max-w-40 lg:col-span-4 lg:w-auto"
		href={`/${post.slug}`}
	>
		<div class="aspect-video overflow-hidden md:aspect-square">
			<div
				class="h-full w-full bg-cover bg-center transition duration-300 hover:scale-105"
				style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
			/>
		</div>
	</a>
	<div class="col-span-12 pt-6 md:pt-0 lg:col-span-8">
		<a
			class="night bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
		<h2
			class="line-clamp-2 text-pretty pt-0.5 text-xl font-bold hover:text-main hover:underline"
		>
			<a href={`/${post.slug}`}>{post.title}</a>
		</h2>
		<p class="line-clamp-3 text-pretty pt-2 text-sm text-onSurfaceVariant">
			{post.description}
		</p>
		<AuthorSM {post} />
	</div>
</article>
