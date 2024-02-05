export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	img?: string;
	modified?: string;
	categories?: string[];
	tags?: string[];
	published: boolean;
};
