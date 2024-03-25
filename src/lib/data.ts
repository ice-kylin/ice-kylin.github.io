import type { Tag, TagsResponse } from '$lib/types';

export function postsResponseToPosts() {}

export function tagsResponseToTags(r: TagsResponse): Tag[] {
	return r.data.map((item) => {
		return item.attributes;
	});
}
