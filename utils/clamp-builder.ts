function toFixed(value: number) {
	return parseFloat(value.toFixed(4));
}

export default function clampBuilder(options: {
	minFontSize: string;
	maxFontSize: string;
	minWidth: string;
	maxWidth: string;
	root: string;
}): string {
	if (Object.values(options).some((value) => !value)) {
		return '';
	}

	const minWidthPx = parseFloat(options.minWidth);
	const maxWidthPx = parseFloat(options.maxWidth);
	const minFontSize = parseFloat(options.minFontSize);
	const maxFontSize = parseFloat(options.maxFontSize);
	const root = parseInt(options.root, 10);

	const minWidth = minWidthPx / root;
	const maxWidth = maxWidthPx / root;

	const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
	const yAxisIntersection = toFixed(-minWidth * slope + minFontSize);

	const min = `${minFontSize}rem`;
	const max = `${maxFontSize}rem`;
	const preferred = `${yAxisIntersection}rem + ${toFixed(slope * 100)}vw`;

	return `clamp(${min}, ${preferred}, ${max})`;
}
