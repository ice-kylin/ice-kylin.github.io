import type { Post, Tag, TagInfo } from '$lib/types';

export function getTags(posts: Post[]): Tag[] {
	if (posts.length === 0) return [];

	return updateTags(posts[0].tags, posts[0], getTags(posts.slice(1)));
}

function updateTags(ts: string[], post: Post, tags: Tag[]): Tag[] {
	if (ts.length === 0) return tags;

	return updateTags(ts.slice(1), post, updateTag(ts[0], post, tags));
}

function updateTag(t: string, post: Post, tags: Tag[]): Tag[] {
	if (tags.length === 0) return [{ name: t, total: 1, posts: [post] }];

	const restTags = tags.slice(1);

	if (t === tags[0].name) {
		return [
			{
				name: t,
				total: tags[0].total + 1,
				posts: [...tags[0].posts, post]
			},
			...restTags
		];
	}

	return [tags[0], ...updateTag(t, post, restTags)];
}

async function getPosts(): Promise<Post[]> {
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
		) as Post[];
}

function getTagNames(tags: Tag[]): TagInfo[] {
	return tags.map((tag) => {
		return { name: tag.name, total: tag.total };
	});
}

export const posts: Promise<Post[]> = getPosts();

export const tags: Promise<Tag[]> = (async () => {
	return getTags(await posts);
})();

export const tagInfos: Promise<TagInfo[]> = (async () => {
	return getTagNames(await tags);
})();
