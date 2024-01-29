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
<main class="px-6 md:px-12 pt-28 flex flex-col gap-7 sm:gap-12">
	<slot />
</main>
<Footer></Footer>
<Pointer></Pointer>
