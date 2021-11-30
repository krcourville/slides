<script lang="ts">
	import { onMount, SvelteComponent } from 'svelte';

	export let presentation: SvelteComponent;

	const SLIDE_BREAKS = ['H1', 'H2'];

	let slides: HTMLDivElement;
	let currentSlide = 0;
	let slideCount = 0;
	let nodes: HTMLElement[] = [];
	let prevDisabled = true;
	let nextDisabled = true;

	$: {
		if (!(slides && slides.children)) {
			nodes = [];
			prevDisabled = true;
			nextDisabled = true;
		} else {
			nodes = Array.from(slides.children).filter(
				(node: HTMLElement) => node.nodeType === node.ELEMENT_NODE
			) as HTMLElement[];
		}
	}

	$: {
		prevDisabled = currentSlide === 0;
		nextDisabled = currentSlide === slideCount - 1;
	}

	$: {
		let cursor = -1;
		nodes.forEach((node) => {
			if (SLIDE_BREAKS.includes(node.tagName)) {
				cursor++;
			}

			if (cursor === currentSlide) {
				node.style.display = 'block';
			} else {
				node.style.display = 'none';
			}
		});
		slideCount = cursor + 1;
	}

	onMount(() => {
		showCurrentSlide();
	});

	function showCurrentSlide(next = 0): void {
		currentSlide = next;
	}

	function onPreviousClick() {
		showCurrentSlide(currentSlide - 1);
	}

	function onNextClick() {
		showCurrentSlide(currentSlide + 1);
	}
</script>

<div class="slideshow">
	<nav aria-label="Page navigation example" class="mt-3">
		<ul class="pagination justify-content-center">
			<li class="page-item" class:disabled={prevDisabled}>
				<a class="page-link" href="#" tabindex="-1" aria-disabled="true" on:click={onPreviousClick}
					>Previous</a
				>
			</li>
			<li class="page-item d-flex justify-content-around align-items-center">
				<div class="mx-3 mx-1">
					{currentSlide + 1} of {slideCount}
				</div>
			</li>
			<li class="page-item" class:disabled={nextDisabled}>
				<a class="page-link" href="#" on:click={onNextClick}>Next</a>
			</li>
		</ul>
	</nav>

	<div class="slides" bind:this={slides}>
		<svelte:component this={presentation} />
	</div>
</div>

<style>
</style>
