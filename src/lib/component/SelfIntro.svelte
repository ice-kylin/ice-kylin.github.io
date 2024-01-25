<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div>
	<p class="font-art text-sm small-caps">
		{title}
	</p>
	<div class="flex gap-2 items-center">
		<div class="w-[18px]">
			<slot />
		</div>
		<span class="font-serif">{content}</span>
	</div>
</div>
