<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/component/header.svelte';
	import Pagination from '$lib/component/pagination.svelte';
	import Title from '$lib/component/title.svelte';

	export let data: PageData;
</script>

<Header />
<Title subtitle="标签" title={data.tag} total={data.pagination.total} />
<Pagination pagination={data.pagination} />
