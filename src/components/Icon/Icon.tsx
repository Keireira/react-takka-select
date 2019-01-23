import * as React from 'react'
import { toPascalCase } from '@helpers'

import * as Icons from './assets'
import { IconProps } from './Icon.d'
import StyledIcon from './Icon.styles'

const Icon = ({ name, ...restProps }: IconProps) => {
	const iconName = toPascalCase(name)
	const FindedIcon = Icons[iconName]

	if (FindedIcon) {
		return <StyledIcon as={FindedIcon} {...restProps}/>
	}

	return null
}

export default Icon
