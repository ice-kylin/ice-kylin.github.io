<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import { API_URL_CLIENT } from '$lib/utils';
	import AuthorXS from '$lib/home/author-xs.svelte';

	export let post: PostPreview;
</script>

<article
	class="grid grid-cols-12 gap-0 border-b border-b-outlineVariant py-6 lg:gap-7"
>
	<a class="col-span-12 lg:col-span-4" href={`/${post.slug}`}>
		<div
			class="aspect-video bg-cover lg:aspect-square"
			style={`background-image: url("${API_URL_CLIENT}${post.cover}");`}
		/>
	</a>
	<div class="col-span-12 pt-6 lg:col-span-8 lg:pt-0">
		<a
			class="bg-gradient-to-r from-[#AC32E4] from-0% via-[#7918F2] via-[48%] to-[#4801FF] bg-clip-text text-sm font-bold text-transparent"
			href={`/category/${post.category.slug}`}>{post.category.category}</a
		>
		<h2
			class="line-clamp-2 text-pretty pt-0.5 text-xl font-bold hover:text-main hover:underline"
		>
			<a href={`/${post.slug}`}>{post.title}</a>
		</h2>
		<p class="line-clamp-3 text-pretty pt-2 text-onSurfaceVariant">
			{post.description}
		</p>
		<AuthorXS {post} />
	</div>
</article>
