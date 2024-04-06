<script lang="ts">
	import '../app.css';
	import '../font.css';
	import '@fontsource-variable/open-sans';
	import '@fontsource-variable/fira-code';
	import Footer from '$lib/component/footer.svelte';
</script>

<svelte:head>
	<script
		data-website-id="f86d0c29-13db-4c08-9605-853263c6d795"
		defer
		src="https://umami.icekylin.online/script.js"
	></script>
</svelte:head>

<slot />
<Footer />
