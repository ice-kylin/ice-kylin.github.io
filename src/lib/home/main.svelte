<script lang="ts">
	import type { TagInfo } from '$lib/types';
	import Posts from './posts.svelte';
	import Aside from '$lib/component/aside.svelte';

	export let tagInfos: TagInfo[];
</script>

<div class="lg:grid lg:grid-cols-[1fr_256px]">
	<Posts>
		<slot />
	</Posts>
	<Aside {tagInfos} />
</div>
