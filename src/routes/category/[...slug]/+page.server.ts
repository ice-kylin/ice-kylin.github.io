import type { PageServerLoad } from './$types';
import type { CategoryData } from '$lib/types';
import { getCategoryData } from '$lib/data';

export const load: PageServerLoad = async ({
	params
}): Promise<CategoryData> => {
	const path = params.slug.split('/');

	return getCategoryData(path.slice(0, -1), +path.at(-1)!);
};
