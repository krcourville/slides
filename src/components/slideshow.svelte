<script lang="ts">
	import { onMount } from 'svelte';

	export let presentation: HTMLDivElement[] = [];

	let slideView: HTMLDivElement[] = [];
	let currentSlide = 1;
	let prevDisabled = true;
	let nextDisabled = true;

	$: {
		prevDisabled = currentSlide === 1;
		nextDisabled = currentSlide === presentation.length;
	}

	$: {
		slideView = presentation.slice(currentSlide - 1, currentSlide);
	}

	onMount(() => {
		showCurrentSlide();
	});

	function showCurrentSlide(next = 0): void {
		if (next < 1) {
			next = 1;
		} else if (next > presentation.length) {
			next = presentation.length;
		}
		currentSlide = next;
	}

	function onPreviousClick() {
		showCurrentSlide(currentSlide - 1);
	}

	function onNextClick() {
		showCurrentSlide(currentSlide + 1);
	}

	function onKeyUp(evt: KeyboardEvent) {
		const { key } = evt;
		switch (key) {
			case ' ': {
				onNextClick();
				break;
			}
			case 'ArrowLeft': {
				onPreviousClick();
				break;
			}
			case 'ArrowRight': {
				onNextClick();
				break;
			}
		}
	}
</script>

<svelte:body on:keyup={onKeyUp} />

<div class="slideshow">
	<nav aria-label="Page navigation example" class="mt-3">
		<ul class="pagination justify-content-center">
			<li class="page-item border rounded-start" class:disabled={prevDisabled}>
				<button class="btn btn-light" tabindex="-1" aria-disabled="true" on:click={onPreviousClick}
					>Previous</button
				>
			</li>
			<li
				class="page-item d-flex justify-content-around align-items-center border-top border-bottom"
			>
				<div class="mx-3 mx-1">
					{currentSlide} of {presentation?.length ?? 0}
				</div>
			</li>
			<li class="page-item border rounded-end" class:disabled={nextDisabled}>
				<button class="btn btn-light" on:click={onNextClick}>Next</button>
			</li>
		</ul>
	</nav>

	<div />
	{#each slideView as slide}
		{@html slide.innerHTML}
	{/each}
</div>

<style>
</style>
