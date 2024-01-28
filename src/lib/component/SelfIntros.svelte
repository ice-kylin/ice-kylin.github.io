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
			title="Third Year B.Sc. Computer Science student"
			content="University of Birmingham"
		>
			<GraduationCap></GraduationCap>
		</SelfIntro>
		<SelfIntro
			title="Field of Research"
			content="Compilers, programming language theory, formal verification, operating systems, etc."
		>
			<OpenBook></OpenBook>
		</SelfIntro>
		<SelfIntro
			title="Skills"
			content="Rust, Haskell, TypeScript, Svelte, Figma..."
		>
			<Seeding></Seeding>
		</SelfIntro>
		<SelfIntro
			title="Hobbies"
			content="Playing video games, watching anime..."
		>
			<ArtistPalette></ArtistPalette>
		</SelfIntro>
		<SelfIntro title="Email" content="qxw092@student.bham.ac.uk">
			<ClosedMailbox></ClosedMailbox>
		</SelfIntro>
		<div class="mt-2">
			<PointerDiv full radius="rounded-full">
				<Button
					label="了解更多"
					types="primary"
					backgroundColorClass="bg-surfaceContainer"
					textColorClass="text-onSurfaceContainer"
				>
					<Icon
						data={arrowRight}
						size="18px"
						stroke="transparent"
						slot="icon"
					></Icon>
				</Button>
			</PointerDiv>
		</div>
	</div>
</div>
