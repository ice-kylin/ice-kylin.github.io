<script lang="ts">
	export let text: string;
</script>

<div
	class="border-t-2 border-b-2 border-onBackground py-5 text-xl font-art2 tracking-wider overflow-hidden"
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
