import { writable, type Writable } from 'svelte/store';

export const isClose: Writable<boolean> = writable(true);
