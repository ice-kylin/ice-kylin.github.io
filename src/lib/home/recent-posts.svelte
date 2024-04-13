<script lang="ts">
	import type { PostPreview1 } from '$lib/types';
	import Posts from './posts.svelte';

	export let posts: PostPreview1[];
</script>

<div class="relative -top-20 -mb-20">
	<Posts {posts} />
</div>
