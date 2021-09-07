const allUnits = {
	px: {
		value: 'px',
		label: 'px',
		step: 1,
	},
	rem: {
		value: 'rem',
		label: 'rem',
		step: 0.01,
	},
};

/**
 * Units of measurements.
 */
export const UNITS = Object.values(allUnits);

/**
 * Parses a number and unit from a value.
 */
export function parseUnit(value: string): [string, string, number] {
	const num = value.replace('px', '').replace('rem', '');

	const unitMatches = value.match(/[\d.\-+]*\s*(.*)/);
	const unit = unitMatches !== null ? unitMatches[1] : '';
	const match = UNITS.find((item) => item.value === unit);

	return [num, match?.value || 'px', match?.step || 1];
}
