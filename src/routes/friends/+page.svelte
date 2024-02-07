<script lang="ts">
	import { friends } from '$lib/config';
	import Layout from '$lib/component/layout.svelte';
	import PartyingFace from '$lib/icon/partyingFace.svelte';
	import Items from '$lib/component/items.svelte';
	import Friend from '$lib/friends/friend.svelte';
	import seedrandom from 'seedrandom';
</script>

<Layout>
	<div>
		<div class="mx-6 mt-24 flex items-center gap-2 md:mt-12">
			<h1 class="text-3xl font-bold">友链</h1>
			<PartyingFace />
		</div>
		<div
			class="pattern mx-6 mt-6 border-y border-dotted border-y-outlineVariant px-3 py-2 font-num text-xs text-onSurfaceVariant"
		>
			累计 {friends.length} 位朋友
		</div>
		<div class="mx-6 mt-6 overflow-hidden">
			<Items>
				{#each friends as friend, i}
					<Friend
						{friend}
						wide={seedrandom(`${friend.name}${i}`)() < 0.5}
					></Friend>
				{/each}
			</Items>
		</div>
	</div>
</Layout>
