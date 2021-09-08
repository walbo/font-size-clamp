export function hasSameKeys(x: Object, y: Object) {
	const xKeys = Object.keys(x);
	const yKeys = Object.keys(y);
	return !xKeys.some((k) => !yKeys.includes(k));
}
