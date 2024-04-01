import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import {
	postsResponse1ToPostPreviews,
	postsResponse2ToPostPreviews,
	tagsResponseToTagPreviews
} from '$lib/data';
import type { CategoriesResponse, Home } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch }): Promise<Home> => {
	const postsRes = await fetch(
		`${API_URL_SERVER}/posts?sort[0]=publishedAt:desc&pagination[start]=0&pagination[limit]=6&fields[0]=title&fields[1]=description&fields[2]=publishedAt&fields[3]=slug&populate[authors][fields][0]=name&populate[authors][fields][1]=slug&populate[authors][populate][avatar][fields][0]=url&populate[cover][fields][0]=url&populate[category][fields][0]=slug&populate[category][populate][parent][fields][0]=category&populate[category][populate][parent][fields][1]=slug`
	);
	const categoriesRes = await fetch(
		`${API_URL_SERVER}/categories?filters[parent]&[fields][0]=category&[fields][1]=slug`
	);
	const tagsRes = await fetch(
		`${API_URL_SERVER}/tags?[fields][0]=tag&[fields][1]=slug`
	);

	if (!postsRes.ok) {
		error(postsRes.status, 'Failed to fetch posts');
	}
	if (!categoriesRes.ok) {
		error(categoriesRes.status, 'Failed to fetch categories');
	}
	if (!tagsRes.ok) {
		error(tagsRes.status, 'Failed to fetch tags');
	}

	try {
		const categories = await Promise.all(
			((await categoriesRes.json()) as CategoriesResponse).data.map(
				async (item) => {
					const categoryRes = await fetch(
						`${API_URL_SERVER}/posts?filters[category][parent][slug][$eq]=${item.attributes.slug}&sort[0]=publishedAt:desc&pagination[start]=0&pagination[limit]=6&fields[0]=title&fields[1]=description&fields[2]=publishedAt&fields[3]=slug&populate[authors][fields][0]=name&populate[authors][fields][1]=slug&populate[authors][populate][avatar][fields][0]=url&populate[cover][fields][0]=url&populate[category][fields][0]=slug&populate[category][fields][1]=category&populate[category][populate][parent][fields][0]=slug`
					);

					if (!categoryRes.ok) {
						throw categoryRes.status;
					}

					return {
						category: item.attributes.category,
						posts: postsResponse2ToPostPreviews(
							await categoryRes.json()
						)
					};
				}
			)
		);

		return {
			posts: postsResponse1ToPostPreviews(await postsRes.json()),
			tags: tagsResponseToTagPreviews(await tagsRes.json()),
			categories
		};
	} catch (e) {
		if (typeof e === 'number') {
			error(e, 'Failed to fetch posts by category');
		}
		error(404, 'Failed to fetch posts by category');
	}
};
