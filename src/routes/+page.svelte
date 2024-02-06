<script lang="ts">
	import * as config from '$lib/config';
	import Layout from '$lib/layout.svelte';
	import Cover from '$lib/cover.svelte';
	import Main from '$lib/main.svelte';
	import Post from '$lib/main/Post.svelte';
	import Slogen from '$lib/Slogen.svelte';
	import seedrandom from 'seedrandom';

	export let data;
</script>

<Layout color={config.color} cover={true}>
	<Cover slot="cover" />
	<Main>
		{#each data.posts.slice(0, 25) as post, i}
			<Post {post} wide={seedrandom(`${post.title}${i}`)() < 0.5}></Post>
		{/each}
	</Main>
	<Slogen />
</Layout>
