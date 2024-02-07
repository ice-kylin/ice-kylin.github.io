<script lang="ts">
	import * as config from '$lib/config.js';
</script>

<div class="relative md:snap-start">
	<enhanced:img
		alt="Spring Festival 2024"
		class="h-dvh object-cover"
		src={config.cover}
	/>
	<h1
		class="absolute bottom-[60px] left-6 right-6 text-3xl font-bold text-white"
	>
		{config.coverTitle}
	</h1>
</div>
