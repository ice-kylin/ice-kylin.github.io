<script lang="ts">
	import Button from '$lib/component/Button.svelte';
	import { Icon } from 'svelte-icon';
	import SelfIntro from '$lib/component/SelfIntro.svelte';
	import GraduationCap from '$lib/icon/GraduationCap.svelte';
	import OpenBook from '$lib/icon/OpenBook.svelte';
	import Seeding from '$lib/icon/Seeding.svelte';
	import ArtistPalette from '$lib/icon/ArtistPalette.svelte';
	import ClosedMailbox from '$lib/icon/ClosedMailbox.svelte';
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import PointerDiv from '$lib/component/PointerDiv.svelte';
</script>

<div class="md:pt-80 md:basis-2/5">
	<div class="flex flex-col gap-4">
		<span class="font-art text-2xl small-caps">About Me</span>
		<SelfIntro
			content="University of Birmingham"
			title="Third Year B.Sc. Computer Science student"
		>
			<GraduationCap></GraduationCap>
		</SelfIntro>
		<SelfIntro
			content="Compilers, programming language theory, formal verification, operating systems, etc."
			title="Field of Research"
		>
			<OpenBook></OpenBook>
		</SelfIntro>
		<SelfIntro
			content="Rust, Haskell, TypeScript, Svelte, Figma..."
			title="Skills"
		>
			<Seeding></Seeding>
		</SelfIntro>
		<SelfIntro
			content="Playing video games, watching anime..."
			title="Hobbies"
		>
			<ArtistPalette></ArtistPalette>
		</SelfIntro>
		<SelfIntro content="qxw092@student.bham.ac.uk" title="Email">
			<ClosedMailbox></ClosedMailbox>
		</SelfIntro>
		<div class="mt-2">
			<PointerDiv full radius="rounded-full">
				<Button
					backgroundColorClass="bg-surfaceContainer"
					label="了解更多"
					textColorClass="text-onSurfaceContainer"
					types="primary"
				>
					<Icon
						data={arrowRight}
						size="18px"
						slot="icon"
						stroke="transparent"
					></Icon>
				</Button>
			</PointerDiv>
		</div>
	</div>
</div>
