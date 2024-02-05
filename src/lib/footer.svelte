<script lang="ts">
	import { Icon } from 'svelte-icon';
	import * as config from '$lib/config';
	import iceCream from '@mdi/svg/svg/ice-cream.svg?raw';
	import A from '$lib/component/a.svelte';
</script>

<footer
	class="pattern flex flex-col items-center gap-2 px-6 py-7 text-center text-xs text-onSurfaceVariant"
>
	<Icon data={iceCream} size="18px" stroke="transparent" />
	<p>
		$
		{#each config.links as link, i}&nbsp;<A href={link.url}>{link.name}</A
			>{#if i !== config.links.length - 1}&nbsp;.{/if}
		{/each}&nbsp;$
	</p>
	<p>
		Code licensed under <A href="https://www.gnu.org/licenses/gpl-3.0.html"
			>GPLv3</A
		>, articles under <A
			href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
			>CC BY-SA 4.0</A
		>. Inspired by
		<A href="https://anyway.fm">anyway.fm</A> and created with love by icekylin.
	</p>
</footer>
