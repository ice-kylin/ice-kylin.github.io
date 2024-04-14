import type {
	AuthorPreview1,
	AuthorPreview2,
	AuthorsResponse,
	Post,
	PostPreview1,
	PostPreview2,
	PostResponse,
	PostsResponse1,
	PostsResponse2,
	TagPreview,
	TagsResponse
} from '$lib/types';
import { formatDate } from '$lib/utils';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeShiki from '@shikijs/rehype';
import rehypeSanitize from 'rehype-sanitize';

export function postsResponse1ToPostPreview1s(
	r: PostsResponse1
): PostPreview1[] {
	return r.data.map((item) => {
		const attributes = item.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			publishedAt: formatDate(attributes.publishedAt),
			slug: attributes.slug,
			authors: getAuthors1(attributes.authors),
			cover: attributes.cover.data.attributes.url,
			category: {
				category:
					attributes.category.data.attributes.parent.data.attributes
						.category,
				slug: `${attributes.category.data.attributes.parent.data.attributes.slug}/${attributes.category.data.attributes.slug}`
			}
		};
	});
}

export function postsResponse2ToPostPreview1s(
	r: PostsResponse2
): PostPreview1[] {
	return r.data.map((item) => {
		const attributes = item.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			publishedAt: formatDate(attributes.publishedAt),
			slug: attributes.slug,
			authors: getAuthors1(attributes.authors),
			cover: attributes.cover.data.attributes.url,
			category: {
				category: attributes.category.data.attributes.category,
				slug: `${attributes.category.data.attributes.parent.data.attributes.slug}/${attributes.category.data.attributes.slug}`
			}
		};
	});
}

export function postsResponse1ToPostPreview2s(
	r: PostsResponse1
): PostPreview2[] {
	return r.data.map((item) => {
		const attributes = item.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			publishedAt: formatDate(attributes.publishedAt),
			slug: attributes.slug,
			authors: getAuthors2(attributes.authors),
			cover: attributes.cover.data.attributes.url,
			category: {
				category:
					attributes.category.data.attributes.parent.data.attributes
						.category,
				slug: `${attributes.category.data.attributes.parent.data.attributes.slug}/${attributes.category.data.attributes.slug}`
			}
		};
	});
}

function getAuthors1(a: AuthorsResponse): AuthorPreview1[] {
	return a.data.map((item) => {
		return {
			name: item.attributes.name,
			slug: item.attributes.slug,
			avatar: item.attributes.avatar.data.attributes.url
		};
	});
}

function getAuthors2(a: AuthorsResponse): AuthorPreview2[] {
	return a.data.map((item) => {
		return {
			name: item.attributes.name,
			slug: item.attributes.slug
		};
	});
}

export function tagsResponseToTagPreviews(r: TagsResponse): TagPreview[] {
	return r.data.map((item) => {
		return item.attributes;
	});
}

export async function postResponseToPost(r: PostResponse): Promise<Post> {
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeDocument)
		.use(rehypeFormat)
		.use(rehypeShiki, {
			themes: {
				light: 'github-dark',
				dark: 'github-light'
			}
		})
		.use(rehypeStringify)
		.process(r.data[0].attributes.content);

	return {
		title: r.data[0].attributes.title,
		description: r.data[0].attributes.description,
		publishedAt: formatDate(r.data[0].attributes.publishedAt),
		updatedAt: formatDate(r.data[0].attributes.updatedAt),
		authors: getAuthors1(r.data[0].attributes.authors),
		tags: r.data[0].attributes.tags.data.map((item) => {
			return item.attributes;
		}),
		category: {
			category: `${r.data[0].attributes.category.data.attributes.parent.data.attributes.category} · ${r.data[0].attributes.category.data.attributes.category}`,
			slug: `${r.data[0].attributes.category.data.attributes.parent.data.attributes.slug}/${r.data[0].attributes.category.data.attributes.slug}`
		},
		content: String(file),
		cover: r.data[0].attributes.cover.data.attributes.url
	};
}
