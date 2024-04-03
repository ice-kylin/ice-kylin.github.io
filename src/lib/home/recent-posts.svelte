<script lang="ts">
	import type { PostPreview } from '$lib/types';
	import Post from './posts.svelte';

	export let posts: PostPreview[];
</script>

<div class="relative -top-20 -mb-20">
	<Post {posts} />
</div>
