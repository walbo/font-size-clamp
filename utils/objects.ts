export function hasSameKeys(
	x: Record<string, unknown>,
	y: Record<string, unknown>,
): boolean {
	const xKeys = Object.keys(x);
	const yKeys = Object.keys(y);
	return !xKeys.some((k) => !yKeys.includes(k));
}
