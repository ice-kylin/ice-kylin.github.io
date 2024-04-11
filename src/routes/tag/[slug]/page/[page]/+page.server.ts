import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { postsResponse2ToPostPreview2s } from '$lib/data';
import type { Tag } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch, params }): Promise<Tag> => {
	const postsRes = await fetch(
		`${API_URL_SERVER}/posts?filters[tags][slug][$eq]=haskell&sort[0]=publishedAt:desc&pagination[page]=${params.page}&fields[0]=title&fields[1]=description&fields[2]=publishedAt&fields[3]=slug&populate[authors][fields][0]=name&populate[authors][fields][1]=slug&populate[cover][fields][0]=url&populate[category][fields][0]=slug&populate[category][populate][parent][fields][0]=slug&populate[category][populate][parent][fields][1]=category`
	);

	if (!postsRes.ok) {
		error(postsRes.status, 'Failed to fetch tags');
	}

	const posts = await postsRes.json();
	return {
		posts: postsResponse2ToPostPreview2s(posts),
		pagination: posts.meta.pagination
	};
};