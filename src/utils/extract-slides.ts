import showdown from 'showdown';
const SLIDE_BREAKS = ['H1', 'H2'];

/**
 * Convert a mardown string to HTML DOM nodes
 * and then split the HTML to individual slides
 * using H1,H2 as a delimiter.
 * @param mdtext
 * @returns
 */
export default function extractSlides(mdtext: string): HTMLDivElement[] {
	const converter = new showdown.Converter();
	const parser = new DOMParser();

	const html = converter.makeHtml(mdtext);
	const document = parser.parseFromString(html, 'text/html');

	const elements = Array.from(document.body.childNodes).filter(
		(node) => node.nodeType === node.ELEMENT_NODE
	) as HTMLElement[];

	const slides: HTMLDivElement[] = [];
	let currentSlide: HTMLDivElement;
	elements.forEach((node) => {
		if (SLIDE_BREAKS.includes(node.tagName)) {
			if (currentSlide) {
				slides.push(currentSlide);
			}
			currentSlide = document.createElement('div');
			currentSlide.classList.add('slide');
		}
		if (currentSlide) {
			currentSlide.appendChild(node);
		}
	});
	slides.push(currentSlide);
	return slides;
}
