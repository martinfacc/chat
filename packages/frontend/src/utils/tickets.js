export function* integerGenerator() {
	let int = 0
	while (true) {
		yield int++
	}
}
export const intigerTicket = integerGenerator()

export function* colorGenerator() {
	const colors = ['green', 'blue', 'red', 'yellow', 'purple', 'orange']
	let index = 0
	while (true) {
		yield colors[index++ % colors.length]
	}
}
export const colorTicket = colorGenerator()
