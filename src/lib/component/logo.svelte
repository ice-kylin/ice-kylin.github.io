<script lang="ts">
	import { Icon } from 'svelte-icon';
	import logo from '@mdi/svg/svg/image-filter-hdr-outline.svg?raw';
</script>

<a {...$$props} href="/">
	<Icon data={logo} size="32px" stroke="transparent" />
</a>
