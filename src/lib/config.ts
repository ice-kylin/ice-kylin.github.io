import { dev } from '$app/environment';

import springFestival2024 from '../assets/images/spring-festival-2024.jpg?enhanced';
import bird from '../assets/images/bird.webp?enhanced';

// 基本设置
export const title: string = "ICEKYLIN'S BLOG";
export const description: string = '代码改变世界';
export const url: string = dev
	? 'http://localhost:5173/'
	: 'https://icekylin.online';

export const images = {
	springFestival2024,
	bird
};

// 首页设置
export const cover = images.springFestival2024;
export const color = '226 22 33';
