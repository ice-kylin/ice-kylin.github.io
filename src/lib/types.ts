export type Home = {
	posts: PostPreview[];
	tags: TagPreview[];
	categories: CategoryPreview;
};

//
export type PostsResponse1 = {
	data: {
		id: number;
		attributes: {
			title: string;
			description: string;
			publishedAt: string;
			slug: string;
			authors: AuthorsResponse;
			cover: ImgResponse;
			category: CategoryPreviewResponse1;
		};
	}[];
	meta: {
		pagination: PaginationStart;
	};
};

export type AuthorsResponse = {
	data: {
		id: number;
		attributes: {
			name: string;
			slug: string;
			avatar: ImgResponse;
		};
	}[];
};

export type ImgResponse = {
	data: {
		id: number;
		attributes: {
			url: string;
		};
	};
};

export type CategoryPreviewResponse1 = {
	data: {
		id: number;
		attributes: {
			slug: string;
			parent: {
				data: {
					id: number;
					attributes: PostCategoryPreview;
				};
			};
		};
	};
};

export type CategoriesResponse = {
	data: {
		id: number;
		attributes: PostCategoryPreview;
	}[];
	meta: {
		pagination: PaginationStart;
	};
};

export type PostsResponse2 = {
	data: {
		id: number;
		attributes: {
			title: string;
			description: string;
			publishedAt: string;
			slug: string;
			authors: AuthorsResponse;
			cover: ImgResponse;
			category: CategoryPreviewResponse2;
		};
	}[];
	meta: {
		pagination: PaginationStart;
	};
};

export type CategoryPreviewResponse2 = {
	data: {
		id: number;
		attributes: {
			category: string;
			slug: string;
			parent: {
				data: {
					id: number;
					attributes: {
						slug: string;
					};
				};
			};
		};
	};
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

//
export type PostPreview = {
	title: string;
	description: string;
	publishedAt: string;
	slug: string;
	authors: AuthorPreview[];
	cover: string;
	category: PostCategoryPreview;
};

export type AuthorPreview = {
	name: string;
	slug: string;
	avatar: string;
};

export type PostCategoryPreview = {
	category: string;
	slug: string;
};

export type CategoryPreview = {
	category: string;
	posts: PostPreview[];
}[];

export type TagPreview = {
	tag: string;
	slug: string;
};

//
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
