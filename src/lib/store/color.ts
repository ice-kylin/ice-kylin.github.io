import { writable, type Writable } from 'svelte/store';

export const color: Writable<string> = writable('#000000');

export const isMainColor: Writable<boolean> = writable(true);
