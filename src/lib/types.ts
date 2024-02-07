export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	img?: string;
	modified?: string;
	categories: string[];
	tags: string[];
	published: boolean;
};

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
