<script lang="ts">
	export let href: string;
</script>

<a {href} rel="noopener noreferrer" target="_blank" class="underline">
	<slot />
</a>
