import { dev } from '$app/environment';

import springFestival2024 from '../assets/images/spring-festival-2024.jpg?enhanced';
import bird from '../assets/images/bird.webp?enhanced';
import ucl from '../assets/images/ucl.jpg?enhanced';

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
	ucl
};

// 首页设置
export const cover = images.bird;
export const color = '0 0 0';
