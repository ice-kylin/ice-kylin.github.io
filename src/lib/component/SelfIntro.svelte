<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div>
	<p class="fa text-sm small-caps">
		{title}
	</p>
	<div class="flex gap-2 items-center">
		<div class="w-[18px]">
			<slot />
		</div>
		<span class="fs">{content}</span>
	</div>
</div>
