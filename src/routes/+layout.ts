import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const posts: Post[] = await (await fetch('api/posts')).json();
	return { posts };
}
