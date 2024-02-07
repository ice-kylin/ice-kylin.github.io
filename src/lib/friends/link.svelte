<script lang="ts">
	import { Icon } from 'svelte-icon';
	import type { Links } from '$lib/types';
	import twitter from '@mdi/svg/svg/twitter.svg?raw';
	import linkedin from '@mdi/svg/svg/linkedin.svg?raw';
	import github from '@mdi/svg/svg/github.svg?raw';
	import earth from '@mdi/svg/svg/earth.svg?raw';

	export let links: Links;
</script>

<div class="mt-auto flex gap-2">
	<a
		class="hover:text-main"
		href={links.website}
		rel="noopener noreferrer"
		target="_blank"
	>
		<Icon data={earth} size="18px" stroke="transparent" />
	</a>
	{#if links.github}
		<a
			href={links.github}
			rel="noopener noreferrer"
			target="_blank"
			class="hover:text-main"
		>
			<Icon data={github} size="18px" stroke="transparent" />
		</a>
	{/if}
	{#if links.linkedin}
		<a
			href={links.linkedin}
			rel="noopener noreferrer"
			target="_blank"
			class="hover:text-main"
		>
			<Icon data={linkedin} size="18px" stroke="transparent" />
		</a>
	{/if}
	{#if links.x}
		<a
			href={links.x}
			rel="noopener noreferrer"
			target="_blank"
			class="hover:text-main"
		>
			<Icon data={twitter} size="18px" stroke="transparent" />
		</a>
	{/if}
</div>
