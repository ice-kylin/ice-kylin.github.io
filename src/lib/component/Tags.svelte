<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<a href="/" class="text-main hover:underline">#&nbsp;{tag}</a>
{/each}
