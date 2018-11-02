import * as React from 'react'
import { toPascalCase } from '@helpers'

import * as Icons from './assets'

// @ts-ignore
const Icon = React.memo(({ name, ...restProps }) => {
	const iconName = toPascalCase(name)
	const FindedIcon = Icons[iconName]

	if (FindedIcon) {
		return <FindedIcon {...restProps}/>
	}

	return null
})

export default Icon
