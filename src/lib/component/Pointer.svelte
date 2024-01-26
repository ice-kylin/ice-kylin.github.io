<script lang="ts">
	import isMob from '$lib/store/isMob';
	import mousePosition from '$lib/store/mousePosition';

	$: mouseStyle = `top: ${$mousePosition.y - 10}px; left: ${$mousePosition.x - 10}px;`;
</script>

{#if !$isMob.isMob}
	<div
		class="w-5 h-5 bg-white rounded-xl fixed mix-blend-exclusion pointer-events-none"
		style={mouseStyle}
	></div>
{/if}
