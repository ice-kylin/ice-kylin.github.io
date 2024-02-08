import { error } from '@sveltejs/kit';
import { tagInfos } from '$lib/data';

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
			tagInfos: await tagInfos
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
