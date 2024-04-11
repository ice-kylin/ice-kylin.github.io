import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { tagsResponseToTagPreviews } from '$lib/data';
import type { Tags } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';

export const load: PageServerLoad = async ({
	fetch,
	params
}): Promise<Tags> => {
	const tagsRes = await fetch(
		`${API_URL_SERVER}/tags?pagination[page]=${params.page}&pagination[pageSize]=100&[fields][0]=tag&[fields][1]=slug`
	);
	if (!tagsRes.ok) {
		error(tagsRes.status, 'Failed to fetch tags');
	}

	const tags = await tagsRes.json();
	return {
		tags: tagsResponseToTagPreviews(tags),
		pagination: tags.meta.pagination
	};
};
