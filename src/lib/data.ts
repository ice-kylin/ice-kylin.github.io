import type {
	PostPreview,
	PostPreviewsResponse,
	TagPreview,
	TagsResponse
} from '$lib/types';
import { formatDate } from '$lib/utils';

export function postPreviewsResponseToPostPreviews(
	r: PostPreviewsResponse
): PostPreview[] {
	return r.data.map((item) => {
		return {
			title: item.attributes.title,
			description: item.attributes.description,
			publishedAt: formatDate(item.attributes.publishedAt),
			slug: item.attributes.slug,
			authors: item.attributes.authors.data.map((author) => {
				return {
					name: author.attributes.name,
					slug: author.attributes.slug,
					avatar: author.attributes.avatar.data.attributes.url
				};
			}),
			cover: item.attributes.cover.data.attributes.url,
			category: {
				category:
					item.attributes.category.data.attributes.parent.data
						.attributes.category,
				slug: `${item.attributes.category.data.attributes.parent.data.attributes.slug}/${item.attributes.category.data.attributes.slug}`
			}
		};
	});
}

export function tagsResponseToTags(r: TagsResponse): TagPreview[] {
	return r.data.map((item) => {
		return item.attributes;
	});
}
