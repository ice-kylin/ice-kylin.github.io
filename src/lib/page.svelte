<script lang="ts">
	import Footer from '$lib/footer.svelte';
</script>

<div
	class="grid min-h-screen grid-rows-[1fr_auto] pb-1.5 md:snap-start md:pb-3 md:pt-3"
>
	<slot />
	<Footer />
</div>
