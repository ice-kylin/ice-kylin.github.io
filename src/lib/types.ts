export type PostPreviewsResponse = {
	data: {
		id: number;
		attributes: {
			title: string;
			description: string;
			publishedAt: string;
			slug: string;
			authors: {
				data: {
					id: number;
					attributes: {
						name: string;
						avatar: {
							data: {
								id: number;
								attributes: {
									url: string;
								};
							};
						};
					};
				}[];
			}[];
			cover: {
				data: {
					id: number;
					attributes: {
						url: string;
					};
				};
			};
			category: {
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
		};
	}[];
	meta: {
		pagination: PaginationStart;
	};
};

export type PostPreview = {
	title: string;
	description: string;
	publishedAt: string;
	slug: string;
	authors: Author[];
	cover: string;
	category: Category;
};

export type Author = {
	name: string;
	avatar: string;
};

export type Category = {
	category: string;
	slug: string;
};

export type TagsResponse = {
	data: {
		id: number;
		attributes: Tag;
	}[];
	meta: {
		pagination: PaginationPage;
	};
};

export type Tag = {
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
	posts: [];
	tags: Tag[];
};
