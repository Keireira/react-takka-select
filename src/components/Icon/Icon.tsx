import * as React from 'react'

import * as Icons from './assets'

const formatName = (source: string): string => {
	return source.split('-').map((word) => {
		const firstLetter = word.charAt(0).toUpperCase()
		const restLetters = word.slice(1).toLowerCase()

		return `${firstLetter}${restLetters}`
	}).join('')
}

// @ts-ignore
const ArrowDown = React.memo(({ name, ...restProps }) => {
	const test = formatName(name)

	const Icon = Icons[test]

	return Icon ? <Icon {...restProps}/> : null
})

export default ArrowDown
