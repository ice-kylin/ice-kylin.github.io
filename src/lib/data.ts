import type {
	AuthorPreview1,
	AuthorPreview2,
	AuthorsResponse,
	PostPreview1,
	PostPreview2,
	PostsResponse1,
	PostsResponse2,
	TagPreview,
	TagsResponse
} from '$lib/types';
import { formatDate } from '$lib/utils';

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
