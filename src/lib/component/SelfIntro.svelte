<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div>
	<p class="fa small-caps text-sm">
		{title}
	</p>
	<div class="flex items-center gap-2">
		<div class="w-[18px]">
			<slot />
		</div>
		<span class="fs">{content}</span>
	</div>
</div>
