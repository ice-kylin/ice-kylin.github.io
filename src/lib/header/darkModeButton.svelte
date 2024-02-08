<script lang="ts">
	import { Icon } from 'svelte-icon';
	import themeStore, { setTheme } from 'svelte-themes/themeStore';
	import brightness4 from '@mdi/svg/svg/brightness-4.svg?raw';
	import brightness6 from '@mdi/svg/svg/brightness-6.svg?raw';
	import brightness7 from '@mdi/svg/svg/brightness-7.svg?raw';

	$: nextTheme =
		$themeStore.theme === 'dark'
			? 'system'
			: $themeStore.theme === 'system'
				? 'light'
				: 'dark';
</script>

<button
	class="text-inherit md:hover:text-main"
	on:click={() => setTheme(nextTheme)}
>
	<Icon
		data={$themeStore.theme === 'dark'
			? brightness4
			: $themeStore.theme === 'system'
				? brightness6
				: brightness7}
		size="18px"
		stroke="transparent"
	/>
</button>
