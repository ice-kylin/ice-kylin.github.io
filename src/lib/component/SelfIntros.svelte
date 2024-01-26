<script lang="ts">
	import { Button } from 'mood-ui';
	import { Icon } from 'svelte-icon';
	import SelfIntro from '$lib/component/SelfIntro.svelte';
	import GraduationCap from '$lib/icon/GraduationCap.svelte';
	import OpenBook from '$lib/icon/OpenBook.svelte';
	import Seeding from '$lib/icon/Seeding.svelte';
	import ArtistPalette from '$lib/icon/ArtistPalette.svelte';
	import ClosedMailbox from '$lib/icon/ClosedMailbox.svelte';
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import github from '@mdi/svg/svg/github.svg?raw';
</script>

<div class="md:pt-80 md:basis-2/5">
	<div class="flex flex-col gap-4">
		<SelfIntro title="Third Year B.Sc. Computer Science student" content="University of Birmingham">
			<GraduationCap></GraduationCap>
		</SelfIntro>
		<SelfIntro
			title="Field of Research"
			content="Compilers, programming language theory, formal verification, operating systems, etc."
		>
			<OpenBook></OpenBook>
		</SelfIntro>
		<SelfIntro title="Skills" content="Rust, Haskell, TypeScript, Svelte, Figma...">
			<Seeding></Seeding>
		</SelfIntro>
		<SelfIntro title="Hobbies" content="Playing video games, watching anime...">
			<ArtistPalette></ArtistPalette>
		</SelfIntro>
		<SelfIntro title="Email" content="qxw092@student.bham.ac.uk">
			<ClosedMailbox></ClosedMailbox>
		</SelfIntro>
		<div class="flex gap-2 mt-6">
			<Button
				label="了解更多"
				types="primary"
				size="md"
				backgroundColorClass="bg-surfaceContainer"
				textColorClass="text-onSurfaceContainer"
			>
				<Icon data={arrowRight} size="18px" stroke="transparent" slot="icon"></Icon>
			</Button>
			<Button label="Github" types="ghost" size="md" textColorClass="text-onSurface">
				<Icon data={github} size="18px" stroke="transparent" slot="icon"></Icon>
			</Button>
		</div>
	</div>
</div>
