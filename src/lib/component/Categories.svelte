<script lang="ts">
	export let categories: string[];
</script>

<div>
	{#each categories as category}
		<a href="/" class="hover:underline">{category}</a>
	{/each}
</div>
