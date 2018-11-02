const capitalizeWord = (word) => {
	const firstLetter = word.charAt(0).toUpperCase()
	const restedLetters = word.slice(1)

	return `${firstLetter}${restedLetters}`
}

export const toPascalCase = (source: string = ''): string => {
	return source.toLowerCase().split('-').map(capitalizeWord).join('')
}

export default toPascalCase
