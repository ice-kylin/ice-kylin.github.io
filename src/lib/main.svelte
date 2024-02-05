<script lang="ts">
	import IceCream from '$lib/icon/IceCream.svelte';
	import Posts from '../routes/Posts.svelte';
</script>

<div class="mx-6 mb-6 mt-12">
	<div class="flex items-center gap-2">
		<h1 class="text-3xl font-bold">ICEKYLIN 的博客</h1>
		<IceCream />
	</div>
	<div class="pattern text-xs text-onSurfaceVariant mt-6 px-3 py-2 border-y border-y-outlineVariant border-dotted">
		<p>来自伯明翰的问候</p>
	</div>
	<Posts>
		<slot></slot>
	</Posts>
</div>
