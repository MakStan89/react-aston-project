export const classChange = ([context, baseClass]: [string, string]) => {
	if (context === 'bisque') {
		return `${baseClass} theme-bisque`
	} if (context === 'white') {
		return `${baseClass} theme-white`
	} else {
		return `${baseClass} theme-skyblue`
	}
};