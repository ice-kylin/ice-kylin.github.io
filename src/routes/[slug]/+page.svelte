<script lang="ts">
	import type { PageData } from './$types';
	import { API_URL_CLIENT } from '$lib/utils';
	import Header from '$lib/component/h.svelte';
	import AuthorAvatars from '$lib/home/author-avatars.svelte';
	import AuthorNames from '$lib/home/author-names.svelte';

	export let data: PageData;
	$: author = data.authors.length > 1 ? 'Authors' : 'Author';
</script>

<Header />
<div class="relative bg-onSurface">
	<div class="mx-auto grid max-w-screen-xl grid-cols-12 text-surface">
		<div
			class="col-span-12 px-6 pt-8 md:col-span-10 md:col-start-2 md:pt-24 lg:col-span-7 lg:col-start-2"
		>
			<a
				class="hope inline-block bg-clip-text font-bold text-transparent"
				href={data.category.slug}>{data.category.category}</a
			>
			<h1
				class="text-pretty pt-3 text-3xl font-bold md:text-4xl lg:text-5xl"
			>
				{data.title}
			</h1>
			<p class="text-pretty pt-3 text-surfaceVariant md:pt-4">
				{data.description}
			</p>
		</div>
		<div
			class="col-span-12 overflow-visible px-6 md:col-span-10 md:col-start-2"
		>
			<div
				class="relative z-10 mt-10 aspect-video overflow-hidden lg:mt-16"
			>
				<div
					class="h-full w-full bg-cover bg-center transition duration-300 hover:scale-105"
					style={`background-image: url("${API_URL_CLIENT}${data.cover}");`}
				/>
			</div>
		</div>
	</div>
	<div class="absolute -bottom-px left-0 right-0 z-0 h-20 w-full bg-wb" />
</div>
<div class="mx-auto grid max-w-screen-xl grid-cols-12 px-6 pb-6">
	<div
		class="col-span-12 border-b-2 border-b-main py-5 md:col-span-10 md:col-start-2"
	>
		<p class="font-mono text-sm text-outline">{author}</p>
		<div class="flex flex-wrap items-center justify-between gap-2 pt-3">
			<div class="flex items-center gap-8">
				<AuthorAvatars authors={data.authors} />
				<p class="font-bold">
					<AuthorNames authors={data.authors} />
				</p>
			</div>
			<span
				class="ml-auto h-7 border-l border-l-surfaceContainerHigh pl-7 font-mono text-sm leading-7 text-onSurfaceVariant"
			>{data.publishedAt}</span
			>
		</div>
	</div>
</div>
<div class="prose max-w-none px-6 grid grid-cols-12">
	<div class="col-span-12 lg:col-span-1 lg:col-start-2"></div>
	<article class="col-span-12 lg:col-span-7">
		{@html data.content}
	</article>
</div>
