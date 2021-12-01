<script lang="ts">
	import { onMount } from 'svelte';
	import Slideshow from '../components/slideshow.svelte';
	import extractSlides from '../utils/extract-slides';

	let presentation: HTMLDivElement[] = [];

	onMount(async () => {
		fetch('presentations/runbooks.md')
			.then((res) => res.text())
			.then((text) => {
				const nodes = extractSlides(text);
				presentation = nodes;
			});
	});
</script>

<Slideshow bind:presentation />
