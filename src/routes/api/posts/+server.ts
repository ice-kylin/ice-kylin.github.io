import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	return Object.entries(
		import.meta.glob('/src/posts/**/*.md', { eager: true })
	)
		.map(([path, file]) => {
			if (file && typeof file === 'object' && 'metadata' in file) {
				return {
					...(file.metadata as Omit<Post, 'slug'>),
					slug: path.replace('.md', '').split('/').slice(3)
				} as Post;
			}
		})
		.filter((item) => {
			return !!item && item.published;
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
