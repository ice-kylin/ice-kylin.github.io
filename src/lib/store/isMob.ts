import { readable } from 'svelte/store';

// TODO: 可能在有鼠标和触摸屏的设备上有问题
export default readable({ isMob: true }, (set) => {
	if (typeof window === 'undefined') return;

	set({
		isMob: 'ontouchstart' in document.documentElement
	});
});
