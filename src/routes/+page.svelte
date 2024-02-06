<script lang="ts">
	import * as config from '$lib/config';
	import Layout from '$lib/layout.svelte';
	import Cover from '$lib/cover.svelte';
	import Main from '$lib/main.svelte';
	import Post from '$lib/main/Post.svelte';
	import Slogen from '$lib/Slogen.svelte';

	export let data;
</script>

<Layout cover={true} color={config.color}>
	<Cover slot="cover" />
	<Main>
		{#each data.posts as post}
			<Post {post}></Post>
		{/each}
	</Main>
	<Slogen/>
</Layout>
