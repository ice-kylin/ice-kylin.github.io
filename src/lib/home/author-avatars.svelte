<script lang="ts">
	import { API_URL_CLIENT } from '$lib/utils';
	import type { AuthorPreview1 } from '$lib/types';

	export let authors: AuthorPreview1[];
</script>

<ul class="flex">
	{#each authors as author}
		<li>
			<a href={`/author/${author.slug}`}>
				<div
					class="-mr-3 h-10 w-10 rounded-full bg-cover"
					style={`background-image: url("${API_URL_CLIENT}${author.avatar}");`}
				></div>
			</a>
		</li>
	{/each}
</ul>
