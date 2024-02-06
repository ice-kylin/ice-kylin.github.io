<script lang="ts">
	export let categories: string[];
</script>

<div>
	{#each categories as category, i}
		<a href="/" class="hover:underline">{category}</a>
		{#if i !== categories.length - 1}>&nbsp;{/if}
	{/each}
</div>
