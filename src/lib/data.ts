import type {
	AuthorPreview,
	AuthorsResponse,
	PostPreview,
	PostsResponse1,
	PostsResponse2,
	TagPreview,
	TagsResponse
} from '$lib/types';
import { formatDate } from '$lib/utils';

export function postsResponse1ToPostPreviews(r: PostsResponse1): PostPreview[] {
	return r.data.map((item) => {
		const attributes = item.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			publishedAt: formatDate(attributes.publishedAt),
			slug: attributes.slug,
			authors: getAuthors(attributes.authors),
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

export function postsResponse2ToPostPreviews(r: PostsResponse2): PostPreview[] {
	return r.data.map((item) => {
		const attributes = item.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			publishedAt: formatDate(attributes.publishedAt),
			slug: attributes.slug,
			authors: getAuthors(attributes.authors),
			cover: attributes.cover.data.attributes.url,
			category: {
				category: attributes.category.data.attributes.category,
				slug: `${attributes.category.data.attributes.parent.data.attributes.slug}/${attributes.category.data.attributes.slug}`
			}
		};
	});
}

function getAuthors(a: AuthorsResponse): AuthorPreview[] {
	return a.data.map((item) => {
		return {
			name: item.attributes.name,
			slug: item.attributes.slug,
			avatar: item.attributes.avatar.data.attributes.url
		};
	});
}

export function tagsResponseToTagPreviews(r: TagsResponse): TagPreview[] {
	return r.data.map((item) => {
		return item.attributes;
	});
}
