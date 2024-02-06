<script lang="ts">
	import IceCream from '$lib/icon/IceCream.svelte';
	import Posts from './main/Posts.svelte';
	import Aside from '$lib/aside.svelte';
</script>

<div class="border-b border-dotted border-b-outlineVariant lg:grid lg:grid-cols-[1fr_300px]">
	<div class="mx-6 mb-6 mt-12">
		<div class="hidden items-center gap-2 md:flex">
			<h1 class="text-3xl font-bold">ICEKYLIN 的博客</h1>
			<IceCream />
		</div>
		<div
			class="pattern mt-6 hidden border-y border-dotted border-y-outlineVariant px-3 py-2 text-xs text-onSurfaceVariant md:block"
		>
			<p>来自伯明翰的问候</p>
		</div>
		<Posts>
			<slot />
		</Posts>
	</div>
	<Aside />
</div>
