import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { tagsResponseToTagPreviews } from '$lib/data';
import type { Tag } from '$lib/types';
import { API_URL_SERVER } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch }): Promise<Tag> => {
	const tagsRes = await fetch(
		`${API_URL_SERVER}/tags?[fields][0]=tag&[fields][1]=slug`
	);

	if (!tagsRes.ok) {
		error(tagsRes.status, 'Failed to fetch tags');
	}

	return {
		tags: tagsResponseToTagPreviews(await tagsRes.json())
	};
};
