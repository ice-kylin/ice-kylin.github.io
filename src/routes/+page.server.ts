import type { PageServerLoad } from './$types';
import type { HomeData } from '$lib/types';
import { homeData } from '$lib/data';

export const load: PageServerLoad = async (): Promise<HomeData> => {
	return await homeData;
};
