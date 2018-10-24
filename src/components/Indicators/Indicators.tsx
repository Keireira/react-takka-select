import * as React from 'react'

import Root from './Indicators.styles'
import { IndicatorsProps } from './Indicators.d'

class Indicators extends React.PureComponent<IndicatorsProps> {
	render() {
		const { children, CustomComponent, ...restProps } = this.props

		return (
			<Root as={CustomComponent} {...restProps}>{children}</Root>
		)
	}
}

export default Indicators
