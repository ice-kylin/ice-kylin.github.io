<script lang="ts">
	import { Icon } from 'svelte-icon';
	import github from '@mdi/svg/svg/github.svg?raw';
	import { GITHUB } from '$lib/config';
</script>

<a {...$$props} href={GITHUB}>
	<Icon data={github} size="24px" stroke="transparent" />
</a>
