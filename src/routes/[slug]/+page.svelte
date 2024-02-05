<script lang="ts">
	import { formatDate } from '$lib/utils';

	import Page from '$lib/page.svelte';

	export let data;
</script>

<Page>
	<article>
		<hgroup>
			<h1 class="text-3xl font-bold">{data.meta.title}</h1>
			<p>{formatDate(data.meta.date)}</p>
		</hgroup>
		<div>
			<svelte:component this={data.content} />
		</div>
	</article>
</Page>
