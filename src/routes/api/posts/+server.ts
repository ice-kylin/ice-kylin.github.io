import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	return Object.entries(import.meta.glob('/src/posts/*.md', { eager: true }))
		.map(([path, file]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '');
			if (
				file &&
				typeof file === 'object' &&
				'metadata' in file &&
				slug
			) {
				return {
					...(file.metadata as Omit<Post, 'slug'>),
					slug
				} as Post;
			}
		})
		.filter((item) => {
			return item !== undefined && item.published;
		})
		.sort(
			(first, second) =>
				new Date(second!.date).getTime() -
				new Date(first!.date).getTime()
		);
}

export async function GET() {
	return json(await getPosts());
}
