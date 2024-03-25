import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { tagsResponseToTags } from '$lib/data';
import type { Home } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';

export const load: LayoutServerLoad = async ({ fetch }): Promise<Home> => {
	const postsRes = await fetch(
		`${API_URL_SERVER}/posts?sort[0]=publishedAt&pagination[start]=0&pagination[limit]=6&fields[0]=title&fields[1]=description&fields[2]=publishedAt&fields[3]=slug&populate[authors][fields][0]=name&populate[authors][populate][avatar][fields][0]=url&populate[cover][fields][0]=url&populate[category][fields][0]=slug&populate[category][populate][parent][fields][0]=category&populate[category][populate][parent][fields][1]=slug`
	);
	const tagsRes = await fetch(
		`${API_URL_SERVER}/tags?[fields][0]=tag&[fields][1]=slug`
	);

	if (!postsRes.ok) {
		error(postsRes.status, 'Failed to fetch posts');
	}
	if (!tagsRes.ok) {
		error(tagsRes.status, 'Failed to fetch tags');
	}

	return { posts: [], tags: tagsResponseToTags(await tagsRes.json()) };
};
