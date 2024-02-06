import { type Writable, writable } from 'svelte/store';

export type Icon = 'arrow' | null;

export const isMouseOver: Writable<boolean> = writable(false);

export const icon: Writable<Icon> = writable(null);
