/**
 * Internal dependencies
 */
import { parseUnit } from './units';

function convertToRem(value: string, root: number): number {
	const [num, unit] = parseUnit(value);

	if (unit === 'rem') {
		return parseFloat(num);
	}

	return parseFloat(num) / root;
}

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
	const root = parseInt(options.root, 10);

	const minFontSize = convertToRem(options.minFontSize, root);
	const maxFontSize = convertToRem(options.maxFontSize, root);
	const minWidth = convertToRem(options.minWidth, root);
	const maxWidth = convertToRem(options.maxWidth, root);

	if ([minFontSize, maxFontSize, minWidth, maxWidth].some((v) => isNaN(v))) {
		return '';
	}

	const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
	const yAxisIntersection = toFixed(-minWidth * slope + minFontSize);

	const min = `${Math.min(minFontSize, maxFontSize)}rem`;
	const max = `${Math.max(minFontSize, maxFontSize)}rem`;
	const preferred = `${yAxisIntersection}rem + ${toFixed(slope * 100)}vw`;

	return `clamp(${min}, ${preferred}, ${max})`;
}
