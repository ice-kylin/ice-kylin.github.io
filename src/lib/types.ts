export type Categories = 'Life' | 'Study' | 'Game';

export type Post = {
	title: string;
	slug: string[];
	description: string;
	date: string;
	modified?: string;
	categories: Categories[];
	tags: string[];
	published: boolean;
};
