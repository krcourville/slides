<script lang="ts">
	import { onMount, SvelteComponent } from 'svelte';

	export let presentation: SvelteComponent;

	const SLIDE_BREAKS = ['H1', 'H2'];

	let slides: HTMLDivElement;
	let currentSlide = 0;

	onMount(() => {
		showCurrentSlide();
	});

	function nodes(): HTMLElement[] {
		return Array.from(slides.children).filter(
			(node: HTMLElement) => node.nodeType === node.ELEMENT_NODE
		) as HTMLElement[];
	}

	function showCurrentSlide(next = 0): void {
		currentSlide = next;
		let cursor = -1;
		nodes().forEach((node) => {
			if (SLIDE_BREAKS.includes(node.tagName)) {
				cursor++;
			}

			if (cursor === currentSlide) {
				node.style.display = 'block';
			} else {
				node.style.display = 'none';
			}
		});
	}

	function onPreviousClick() {
		showCurrentSlide(currentSlide - 1);
	}

	function onNextClick() {
		showCurrentSlide(currentSlide + 1);
	}
</script>

<div class="slideshow">
	<div class="d-flex btn-group mt-5 mb-5" role="group" aria-label="Slideshow Controls">
		<button class="btn btn-primary" on:click={onPreviousClick}>&lt; Previous</button>
		<button class="btn btn-primary" on:click={onNextClick}>Next &gt;</button>
	</div>
	<div class="slides" bind:this={slides}>
		<svelte:component this={presentation} />
	</div>
</div>

<style>
	.slideshow {
		height: 100vh;
	}
</style>
