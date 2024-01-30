<script lang="ts">
	import '../app.css';
	import '../font.css';
	import '@fontsource-variable/hanken-grotesk';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Pointer from '$lib/component/Pointer.svelte';
</script>

<svelte:head>
	<title>ICEKYLIN'S BLOG</title>
</svelte:head>

<SvelteTheme></SvelteTheme>
<Header></Header>
<slot />
<Footer></Footer>
<Pointer></Pointer>
