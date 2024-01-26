import { readable } from 'svelte/store';

export default readable({ x: 0, y: 0 }, (set) => {
	if (typeof window === 'undefined') return;

	function move(event: { clientX: number; clientY: number }) {
		set({
			x: event.clientX,
			y: event.clientY
		});
	}

	document.body.addEventListener('mousemove', move);

	return () => {
		document.body.removeEventListener('mousemove', move);
	};
});
