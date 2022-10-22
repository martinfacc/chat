export const removeEmptyArgs = (args) => {
	const newArgs = {}
	Object.keys(args).forEach((key) => {
		if (args[key]) {
			newArgs[key] = args[key]
		}
	})
	return newArgs
}
