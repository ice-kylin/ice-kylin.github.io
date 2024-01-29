<script lang="ts">
	export let text: string;
</script>

<div
	class="overflow-hidden border-b border-t border-onBackground py-5 font-art2 text-xl tracking-wider"
>
	<div class="content whitespace-nowrap">
		<p>{text}</p>
	</div>
</div>

<style>
	.content {
		animation: scrollText 30s linear infinite;
	}

	@keyframes scrollText {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
