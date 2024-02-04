<script lang="ts">
	import { Icon } from 'svelte-icon';
	import { isClose } from '$lib/store/header';
	import menu from '@mdi/svg/svg/menu.svg?raw';
	import close from '@mdi/svg/svg/close.svg?raw';
</script>

<button
	on:click={() => {
		isClose.update((b) => !b);
	}}
>
	{#if $isClose}
		<Icon data={menu} size="20px" stroke="transparent" />
	{:else}
		<Icon data={close} size="20px" stroke="transparent" />
	{/if}
</button>
