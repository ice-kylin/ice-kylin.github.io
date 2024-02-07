<script lang="ts">
	import Posts from './Posts.svelte';
	import Aside from '$lib/component/aside.svelte';
</script>

<div
	class="border-b border-dotted border-b-outlineVariant lg:grid lg:grid-cols-[1fr_256px]"
>
	<Posts>
		<slot />
	</Posts>
	<Aside />
</div>
