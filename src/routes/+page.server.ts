import { posts, tagInfos } from '$lib/data';

export async function load() {
	return { posts: (await posts).slice(0, 25), tagInfos: await tagInfos };
}
