<script lang="ts">
	import '../app.css';
	import '../font.css';
	import Footer from '$lib/component/Footer.svelte';
	import Nav from '$lib/component/Nav.svelte';
	import mousePosition from '$lib/mousePosition';

	$: mouseStyle = `top: ${$mousePosition.y - 10}px; left: ${$mousePosition.x - 10}px;`;
</script>

<Nav></Nav>
<div class="px-6 md:px-12 pt-7 pb-6 flex flex-col gap-7">
	<slot />
	<Footer></Footer>
</div>
<div
	class="w-5 h-5 bg-background rounded-xl fixed mix-blend-exclusion pointer-events-none"
	style={mouseStyle}
></div>
