export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	img: string;
	modified?: string;
	categories: string[];
	tags: string[];
	published: boolean;
};

export type Category = {
	name: string;
	total: number;
	items: Post[] | Category[];
};

export type Tag = {
	name: string;
	total: number;
	items: Post[];
};
