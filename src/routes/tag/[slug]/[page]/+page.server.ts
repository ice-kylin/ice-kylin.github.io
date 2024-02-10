import type { PageServerLoad } from './$types';
import type { TagData } from '$lib/types';
import { getTagData } from '$lib/data';

export const load: PageServerLoad = async ({ params }): Promise<TagData> => {
	return await getTagData(params.slug, +params.page);
};
