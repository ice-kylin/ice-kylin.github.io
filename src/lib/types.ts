export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	modified?: string;
	categories: string[];
	tags?: string[];
	img?: string;
	author?: string;
	avatar?: string;
	sticky?: boolean;
	published: boolean;
};

export type Category = {
	name: string;
	total: number;
	categories: CategoryContents;
};

export type CategoryContent = {
	post?: PostPreview;
	category?: Category;
};

export type CategoryContents = CategoryContent[];

export type Tag = {
	name: string;
	total: number;
	posts: PostPreviews;
};

export type Page = {
	current: number;
	total: number;
};

export type PostPreview = Omit<
	Post,
	'modified' | 'tags' | 'published' | 'sticky'
>;

export type PostPreviews = PostPreview[];

export type CategoryPreview = {
	name: string;
	total: number;
	posts: PostPreviews;
	subCategories: string[];
};

export type CategoryPreviews = CategoryPreview[];

export type TagPreview = Omit<Tag, 'posts'>;

export type TagPreviews = TagPreview[];

// 首页
export type HomeData = {
	latest: PostPreviews;
	sticky: PostPreviews;
	categories: CategoryPreviews;
	tags: TagPreviews;
};

// 文章
export type PostData = {
	prev?: PostPreview;
	next?: PostPreview;
	related: PostPreviews;
	tags: Tag[];
};

// 分类
export type CategoryData = {
	category: CategoryPreview;
	page: Page;
};

// 标签
export type TagData = {
	tag: Tag;
	page: Page;
};

// 时间线
export type TimelineData = {
	posts: PostPreviews;
	page: Page;
};

// 画廊

// 友情链接
export type Friend = {
	name: string;
	description: string;
	links: Links;
	avatar: string;
};

export type Links = {
	website: string;
	github?: string;
	x?: string;
	linkedin?: string;
};

// 关于
