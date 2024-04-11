<script lang="ts">
	import type { PostPreview1 } from '$lib/types';
	import Post from './posts.svelte';

	export let posts: PostPreview1[];
</script>

<div class="relative -top-20 -mb-20">
	<Post {posts} />
</div>
