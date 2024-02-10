import type {
	Category,
	CategoryContent,
	CategoryContents,
	CategoryData,
	CategoryPreview,
	HomeData,
	Post,
	PostPreview,
	PostPreviews,
	Tag,
	TagData,
	TagPreviews,
	TimelineData
} from '$lib/types';
import { PAGINATION } from '$lib/config';

// 一堆神奇的函数
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

function getCategories(posts: PostPreviews): CategoryContents {
	return getCategoriesHelper(posts, 0);
}

function getCategoriesHelper(
	posts: PostPreviews,
	level: number
): CategoryContents {
	if (posts.length === 0) return [];

	if (posts[0].categories.length <= level) {
		return mergeCategoryContent(
			{
				post: posts[0]
			},
			getCategoriesHelper(posts.slice(1), level)
		);
	}

	return mergeCategoryContent(
		{
			category: {
				name: posts[0].categories[level],
				total: 1,
				categories: getCategoriesHelper([posts[0]], level + 1)
			}
		},
		getCategoriesHelper(posts.slice(1), level)
	);
}

function mergeCategoryContent(
	categoryContent: CategoryContent,
	categories: CategoryContents
): CategoryContents {
	if (categoryContent.post) {
		return [categoryContent, ...categories];
	}

	if (!categoryContent.category) {
		throw new Error('categoryContent should have either posts or category');
	}

	if (categories.length === 0) {
		return [categoryContent];
	}

	if (categories[0].post) {
		return [
			categories[0],
			...mergeCategoryContent(categoryContent, categories.slice(1))
		];
	}

	if (!categories[0].category) {
		throw new Error('categories should have either posts or category');
	}

	if (categoryContent.category.name == categories[0].category.name) {
		return [
			{
				category: {
					name: categoryContent.category.name,
					total:
						categoryContent.category.total +
						categories[0].category.total,
					categories: mergeCategoryContents(
						categoryContent.category.categories,
						categories[0].category.categories
					)
				}
			},
			...categories.slice(1)
		];
	}

	return [
		categories[0],
		...mergeCategoryContent(categoryContent, categories.slice(1))
	];
}

function mergeCategoryContents(
	c1: CategoryContents,
	c2: CategoryContents
): CategoryContents {
	if (c1.length === 0) {
		return c2;
	}

	return mergeCategoryContents(c1.slice(1), mergeCategoryContent(c1[0], c2));
}

function getTags(posts: Post[]): Tag[] {
	if (posts.length === 0) return [];

	return updateTags(
		posts[0].tags || [],
		getPostPreview(posts[0]),
		getTags(posts.slice(1))
	);
}

function updateTags(ts: string[], post: PostPreview, tags: Tag[]): Tag[] {
	if (ts.length === 0) return tags;

	return updateTags(ts.slice(1), post, updateTag(ts[0], post, tags));
}

function updateTag(t: string, post: PostPreview, tags: Tag[]): Tag[] {
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

// 通过以上神奇的函数得到的原始数据
const posts: Promise<Post[]> = getPosts();

const postPreviews: Promise<PostPreviews> = (async () => {
	return (await posts).map(getPostPreview);
})();

const categories: Promise<CategoryContents> = (async () => {
	return getCategories(await postPreviews);
})();

const tags: Promise<Tag[]> = (async () => {
	return getTags(await posts);
})();

// 用来做进一步处理的函数
function getPostPreview(post: Post): PostPreview {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { modified, tags, published, sticky, ...postPreview } = post;

	return postPreview;
}

function getCategoryPreview(category: Category): CategoryPreview {
	return {
		name: category.name,
		total: category.total,
		posts: category.categories.flatMap(getCategoryContentPosts),
		subCategories: []
	};
}

function getCategoryContentPosts(
	categoryContent: CategoryContent
): PostPreviews {
	if (categoryContent.post) return [categoryContent.post];

	if (!categoryContent.category) {
		throw new Error('categoryContent should have either posts or category');
	}

	return categoryContent.category.categories.flatMap((item) => {
		return getCategoryContentPosts(item);
	});
}

function getTagPreview(tag: Tag) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { posts, ...tagPreview } = tag;

	return tagPreview;
}

// 首页
const latest: Promise<PostPreviews> = (async () => {
	return (await postPreviews).slice(0, 10);
})();

const sticky: Promise<PostPreviews> = (async () => {
	return (await posts)
		.filter((post) => post.sticky)
		.slice(0, 6)
		.map(getPostPreview);
})();

const tagPreviews: Promise<TagPreviews> = (async () => {
	return (await tags).map(getTagPreview);
})();

export const homeData: Promise<HomeData> = (async () => {
	return {
		latest: await latest,
		sticky: await sticky,
		categories: (await categories)
			.filter((categoryContent) => categoryContent.category)
			.map((categoryContent) =>
				getCategoryPreview(categoryContent.category!)
			)
			.map((categoryPreviews) => {
				const { name, total, posts, subCategories } = categoryPreviews;

				return {
					name,
					total,
					posts: posts.slice(0, 4),
					subCategories
				};
			}),
		tags: await tagPreviews
	};
})();

// 文章

// 分类
async function findCategory(
	category: string[],
	categories: CategoryContents
): Promise<Category> {
	if (category.length > 1) {
		const c = categories.find((c) => c.category?.name === category[0])
			?.category?.categories;

		if (!c) {
			throw new Error(`Category ${category[0]} not found`);
		}

		return findCategory(category.slice(1), c);
	}

	const rst = categories.find(
		(c) => c.category?.name === category[0]
	)?.category;

	if (!rst) {
		throw new Error(`Category ${category[0]} not found`);
	}

	return rst;
}

async function findCategoryPreview(
	category: string[]
): Promise<{ c: CategoryPreview; total: number }> {
	const c = getCategoryPreview(
		await findCategory(category, await categories)
	);

	return {
		c,
		total: Math.ceil(c.total / PAGINATION)
	};
}

export async function getCategoryData(
	category: string[],
	page: number
): Promise<CategoryData> {
	const { c, total } = await findCategoryPreview(category);

	return {
		category: {
			name: c.name,
			total: c.total,
			posts: c.posts.slice((page - 1) * PAGINATION, page * PAGINATION),
			subCategories: c.subCategories
		},
		page: {
			current: page,
			total
		}
	};
}

// 标签
async function findTag(tag: string): Promise<{ t: Tag; total: number }> {
	const t = (await tags).find((t) => t.name === tag);

	if (!t) {
		throw new Error(`Tag ${tag} not found`);
	}

	return {
		t,
		total: Math.ceil(t.total / PAGINATION)
	};
}

export async function getTagData(tag: string, page: number): Promise<TagData> {
	const { t, total } = await findTag(tag);

	return {
		tag: {
			name: t.name,
			posts: t.posts.slice((page - 1) * PAGINATION, page * PAGINATION),
			total: t.total
		},
		page: {
			current: page,
			total
		}
	};
}

// 时间线
const total = Math.ceil((await posts).length / PAGINATION);

export async function getTimelineData(page: number): Promise<TimelineData> {
	return {
		posts: (await postPreviews).slice(
			(page - 1) * PAGINATION,
			page * PAGINATION
		),
		page: {
			current: page,
			total
		}
	};
}

// 画廊
