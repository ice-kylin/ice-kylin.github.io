import { dev } from '$app/environment';

import springFestival2024 from '../assets/covers/spring-festival-2024.jpg?enhanced';
import bird from '../assets/covers/bird.webp?enhanced';
import ucl from '../assets/images/ucl.jpg?enhanced';
import neom from '../assets/images/neom.avif?enhanced';
import kevinZonda from '../assets/persons/kevin.png?enhanced';
import type { Friend } from '$lib/types';

// 基本设置
export const title: string = "ICEKYLIN'S BLOG";
export const description: string = '代码改变世界';
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
export const url: string = dev
	? 'http://localhost:5173/'
	: 'https://icekylin.online';

// 图片设置
export const images = {
	springFestival2024,
	bird,
	ucl,
	neom
};

// 首页设置
export const cover: string = springFestival2024;
export const coverTitle: string = '二〇二四新春快乐';
export const color: string = '226 22 33';

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
