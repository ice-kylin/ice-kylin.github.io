<script lang="ts">
	import LgPost from '$lib/component/lg-post.svelte';
	import XsPost from '$lib/component/xs-post.svelte';
</script>

<section class="">
	<div class="mx-auto grid max-w-screen-xl grid-cols-12 px-6">
		<LgPost />
		<div class="col-span-12 lg:col-span-5">
			<XsPost />
		</div>
	</div>
</section>
