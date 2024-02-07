<script lang="ts">
	import Posts from './posts.svelte';
	import Aside from '$lib/component/aside.svelte';
</script>

<div class="lg:grid lg:grid-cols-[1fr_256px]">
	<Posts>
		<slot />
	</Posts>
	<Aside />
</div>
