export function generateUID() {
	const firstPart = (Math.random() * 46656) | 0;
	const secondPart = (Math.random() * 46656) | 0;
	const firstPartSlice = ('000' + firstPart.toString(36)).slice(-3);
	const secondPartSlice = ('000' + secondPart.toString(36)).slice(-3);
	return firstPartSlice + secondPartSlice;
}
