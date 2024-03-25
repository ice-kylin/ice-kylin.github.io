<script lang="ts">
	export let href: string;
</script>

<a class="underline" {href} rel="noopener noreferrer" target="_blank">
	<slot />
</a>
