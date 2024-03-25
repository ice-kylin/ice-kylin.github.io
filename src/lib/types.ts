export type PostPreviewsResponse = {
	data: {
		id: number;
		attributes: {
			title: string;
			description: string;
			publishedAt: string;
			slug: string;
			authors: AuthorPreviewResponse;
			cover: Img;
			category: CategoryPreviewResponse;
		};
	}[];
	meta: {
		pagination: PaginationStart;
	};
};

export type AuthorPreviewResponse = {
	data: {
		id: number;
		attributes: {
			name: string;
			slug: string;
			avatar: Img;
		};
	}[];
};

export type Img = {
	data: {
		id: number;
		attributes: {
			url: string;
		};
	};
};

export type CategoryPreviewResponse = {
	data: {
		id: number;
		attributes: {
			slug: string;
			parent: {
				data: {
					id: number;
					attributes: {
						category: string;
						slug: string;
					};
				};
			};
		};
	};
};

export type PostPreview = {
	title: string;
	description: string;
	publishedAt: string;
	slug: string;
	authors: AuthorPreview[];
	cover: string;
	category: CategoryPreview;
};

export type AuthorPreview = {
	name: string;
	slug: string;
	avatar: string;
};

export type CategoryPreview = {
	category: string;
	slug: string;
};

export type TagsResponse = {
	data: {
		id: number;
		attributes: TagPreview;
	}[];
	meta: {
		pagination: PaginationPage;
	};
};

export type TagPreview = {
	tag: string;
	slug: string;
};

export type PaginationStart = {
	start: number;
	limit: number;
	total: number;
};

export type PaginationPage = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

export type Home = {
	posts: PostPreview[];
	tags: TagPreview[];
};
