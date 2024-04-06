<script lang="ts">
	import * as config from '$lib/config';
	import { Icon } from 'svelte-icon';
	import arrowUp from '@mdi/svg/svg/arrow-up.svg?raw';
	import A from '$lib/component/a.svelte';
	import Logo from '$lib/component/logo.svelte';

	let h: number;
</script>

<div class="mt-6" style={`height: ${h}px;`} />
<footer
	bind:clientHeight={h}
	class="absolute bottom-0 left-0 right-0 text-pretty font-mono text-xs"
>
	<div class="bg-onSurfaceVariant">
		<div
			class="mx-auto flex max-w-screen-xl flex-row-reverse gap-3 px-6 py-3 text-surface"
		>
			<Icon data={arrowUp} size="16px" stroke="transparent" />
			Back To Top
		</div>
	</div>
	<div class="bg-onBackground">
		<div class="mx-auto max-w-screen-xl px-6 py-3 text-background">
			<Logo />
			<p class="mt-3">
				Code licensed under <A
					href="https://www.gnu.org/licenses/gpl-3.0.html">GPLv3</A
				>, articles under
				<A href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
					>CC BY-SA 4.0</A
				>. Design by icekylin, inspired by
				<A href="https://blog.github.com">Github Blog</A> and created with
				love by icekylin.
			</p>
		</div>
	</div>
	<div class="bg-onSurfaceVariant">
		<div class="mx-auto max-w-screen-xl px-6 pb-6 pt-3 text-surface">
			$
			{#each config.LINKS as link, i}&nbsp;<A href={link.url}
					>{link.name}</A
				>
				{#if i !== config.LINKS.length - 1}.{/if}
			{/each}&nbsp;$
		</div>
	</div>
</footer>
