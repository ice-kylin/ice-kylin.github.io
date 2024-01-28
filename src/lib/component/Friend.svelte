<script lang="ts">
	import kevin from '../../assets/people/kevin.png';
	import earth from '@mdi/svg/svg/earth.svg?raw';
	import github from '@mdi/svg/svg/github.svg?raw';
	import PointerDiv from '$lib/component/PointerDiv.svelte';
	import { Icon } from 'svelte-icon';

	export let name: string;
	export let description: string;
	export let link: string;
	export let githubLink: string | undefined = undefined;
</script>

<div class="flex gap-8">
	<PointerDiv>
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img
				src={kevin}
				alt={name}
				loading="lazy"
				class="w-10 h-10 rounded-full"
			/>
		</a>
	</PointerDiv>
	<div class="flex flex-col gap-1">
		<p class="font-bold">{name}</p>
		<p class="text-onSurfaceVariant text-sm">{description}</p>
		<div class="flex gap-2">
			<PointerDiv>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Icon
						data={earth}
						size="18px"
						stroke="transparent"
						slot="icon"
					></Icon>
				</a>
			</PointerDiv>
			{#if githubLink}
				<PointerDiv>
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon
							data={github}
							size="18px"
							stroke="transparent"
							slot="icon"
						></Icon>
					</a>
				</PointerDiv>
			{/if}
		</div>
	</div>
</div>
