// import springFestival2024 from '../assets/covers/spring-festival-2024.jpg?enhanced';
// import bird from '../assets/covers/bird.webp?enhanced';
import ucl from '../assets/images/ucl.jpg?enhanced';
import neom from '../assets/images/neom.avif?enhanced';
import pote from '../assets/covers/pote.jpg?enhanced';
import kevinZonda from '../assets/persons/kevin.png?enhanced';
import type { Friend } from '$lib/types';

// 基本设置
export const title: string = "ICEKYLIN'S BLOG";
// export const description: string = '代码改变世界';
export const links = [
	{
		name: 'GitHub',
		url: 'https://github.com/ice-kylin'
	},
	{
		name: 'X',
		url: 'https://twitter.com/icekylin_'
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/icekylin/'
	},
	{
		name: 'Bilibili',
		url: 'https://space.bilibili.com/21705530'
	},
	{
		name: 'Buy Me a Coffee',
		url: 'https://www.buymeacoffee.com/icekylin'
	}
];

// 图片设置
export const images = {
	// springFestival2024,
	// bird,
	ucl,
	neom
};

// 首页设置
export const cover: string = pote;
export const color: string = '32 29 41';

// 朋友设置
export const friends: Friend[] = [
	{
		name: 'KevinZonda',
		description: '我的大学同学',
		links: {
			website: 'https://kevinzonda.com/',
			github: 'https://github.com/KevinZonda',
			x: 'https://twitter.com/toncoin_cn',
			linkedin: 'https://www.linkedin.com/in/shixiang/'
		},
		avatar: kevinZonda
	}
];
