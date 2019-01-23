import * as React from 'react'

import Icon from '../Icon'

import { IndicatorProps } from './Indicator.d'
import { DefaultIndicator, RotateIndicator } from './Indicator.styles'


const components = {
	rotate: RotateIndicator,
	default: DefaultIndicator,
}

const Indicator = ({ name, isActive, type, ...restProps }: IndicatorProps) => {
	const Component = components[type] || components.default

	console.log('RERENDER', type)

	return (
		<Component isActive={isActive} {...restProps}>
			<Icon name={name}/>
		</Component>
	)
}

Indicator.defaultProps = {
	isActive: false,
	type: 'default',
}

export default React.memo(Indicator)
