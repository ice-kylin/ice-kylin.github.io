<script lang="ts">
	import * as config from '$lib/config';
	import IceCream from '$lib/icon/IceCream.svelte';
</script>

<footer class="px-6 pb-6 pt-12 md:px-12">
	<div class="border-b border-b-onBackground pb-2">
		<IceCream />
	</div>
	<p class="fs mt-4 text-pretty text-sm text-onSurfaceVariant">
		Code licensed under GPLv3, articles under CC BY-SA 4.0.
		<br />
		Designed and created with love by icekylin.
	</p>
	<p class="fs mt-2 text-sm">{config.title}</p>
</footer>
