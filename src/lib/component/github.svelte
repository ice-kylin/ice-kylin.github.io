<script lang="ts">
	import { GITHUB } from '$lib/config';
	import { Icon } from 'svelte-icon';
	import github from '@mdi/svg/svg/github.svg?raw';
</script>

<a {...$$props} href={GITHUB}>
	<Icon data={github} size="24px" stroke="transparent" />
</a>
