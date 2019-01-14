import * as React from 'react'
import { toPascalCase } from '@helpers'

import * as Icons from './assets'

type Props = {
	name: string;
}

// @ts-ignore
const Icon = React.memo(({ name, ...restProps }: Props) => {
	const iconName = toPascalCase(name)
	const FindedIcon = Icons[iconName]

	if (FindedIcon) {
		return <FindedIcon {...restProps}/>
	}

	return null
})

export default Icon
