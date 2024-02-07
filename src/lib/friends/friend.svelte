<script lang="ts">
	import type { Friend } from '$lib/types';
	import Item from '$lib/component/item.svelte';
	import Link from '$lib/friends/link.svelte';

	export let wide: boolean;
	export let friend: Friend;
</script>

<Item {wide}>
	<div class="flex h-full flex-col gap-2">
		<a
			class="font-bold decoration-main decoration-wavy underline-offset-4 hover:text-main hover:underline"
			href={friend.links.website}
			rel="noopener noreferrer"
			target="_blank">{friend.name}</a
		>
		<p class="text-sm text-onSurfaceVariant">
			{friend.description}
		</p>
		<Link links={friend.links} />
	</div>
	<enhanced:img
		alt={friend.name}
		class="h-16 w-16 rounded-full"
		src={friend.avatar}
	/>
</Item>
