const SLIDE_BREAKS = ['H1', 'H2'];

export default function slideshow(node: HTMLElement): void {
	const slidesContainer = document.createElement('div');
	slidesContainer.classList.add('slides-container');

	let currentSlide: HTMLElement;
	const slides: HTMLElement[] = [];

	node.childNodes.forEach((node: HTMLElement) => {
		if (SLIDE_BREAKS.includes(node.tagName)) {
			if (currentSlide) {
				slidesContainer.appendChild(currentSlide);
			}
			currentSlide = document.createElement('div');
			slides.push(currentSlide);
			currentSlide.style.display = 'none';
		}
		currentSlide.appendChild(node);
	});
	slidesContainer.appendChild(currentSlide);

	node.appendChild(slidesContainer);
	slides[0].style.display = 'block';
}
