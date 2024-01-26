import { type Writable, writable } from 'svelte/store';

export const pointer: Writable<Pointer> = writable({
	isMouseOver: false
});
