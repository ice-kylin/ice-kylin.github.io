<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<a href="/">#&nbsp;{tag}</a>
{/each}
