import { type Writable, writable } from 'svelte/store';

interface Pointer {
	isMouseOver: boolean;
	full?: boolean;
	w?: number;
	h?: number;
	t?: number;
	l?: number;
	color?: string;
	radius?: string;
}

export const pointer: Writable<Pointer> = writable({
	isMouseOver: false
});
