import * as React from 'react'
import { toPascalCase } from '@helpers'

import * as Icons from './assets'
import StyledIcon from './Icon.styles'

type Props = {
	name: string;
}

const Icon = ({ name, ...restProps }: Props) => {
	const iconName = toPascalCase(name)
	const FindedIcon = Icons[iconName]

	if (FindedIcon) {
		return <StyledIcon as={FindedIcon} {...restProps}/>
	}

	return null
}

export default Icon
