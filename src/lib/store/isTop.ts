import { readable } from 'svelte/store';
import { throttle } from 'throttle-debounce';

export default readable({ isTop: true }, (set) => {
	if (typeof window === 'undefined') return;

	let isTop = true;

	const scroll = throttle(1000, () => {
		isTop = document.documentElement.scrollTop === 0;

		set({ isTop });
	});

	window.addEventListener('scroll', scroll);

	return () => {
		window.removeEventListener('scroll', scroll);
	};
});
