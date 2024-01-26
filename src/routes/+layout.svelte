<script lang="ts">
	import '../app.css';
	import '../font.css';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import Nav from '$lib/component/Nav.svelte';
	import Pointer from '$lib/component/Pointer.svelte';
</script>

<SvelteTheme></SvelteTheme>
<Nav></Nav>
<div class="px-6 md:px-12 pt-28 pb-6 flex flex-col gap-12">
	<slot />
	<Footer></Footer>
</div>
<Pointer></Pointer>
