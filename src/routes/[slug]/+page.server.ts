import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { postResponseToPost } from '$lib/data';

export const load: PageServerLoad = async ({
	fetch,
	params
}): Promise<Post> => {
	const postRes = await fetch(
		`${API_URL_SERVER}/posts?filters[slug][$eq]=${params.slug}&[fields][0]=title&[fields][1]=description&[fields][2]=content&[fields][3]=publishedAt&[fields][4]=updatedAt&populate[tags][fields][0]=tag&populate[tags][fields][1]=slug&populate[authors][fields][0]=name&populate[authors][fields][1]=slug&populate[authors][populate][avatar][fields][0]=url&populate[cover][fields][0]=url&populate[category][fields][0]=category&populate[category][fields][1]=slug&populate[category][populate][parent][fields][0]=category&populate[category][populate][parent][fields][1]=slug`
	);
	if (!postRes.ok) {
		error(postRes.status, 'Failed to fetch post');
	}

	return postResponseToPost(await postRes.json());
};
