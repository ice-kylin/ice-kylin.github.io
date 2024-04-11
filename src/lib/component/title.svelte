<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let total: number;
</script>

<div class="mx-auto max-w-screen-xl px-6">
	<div
		class="border-b border-b-surfaceContainerHigh pb-10 pt-[88px] md:pb-12 md:pt-28"
	>
		<p>{subtitle}</p>
		<h1 class="text-3xl font-bold md:text-5xl">
			{title}
			<sub class="text-base">{total}</sub>
		</h1>
	</div>
</div>
