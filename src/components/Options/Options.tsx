import * as React from 'react'

import Root from './styles'
import { OptionsProps } from './Options.d'

class Options extends React.PureComponent<OptionsProps> {
	render() {
		const { children, CustomComponent, ...restProps } = this.props

		return (
			<Root as={CustomComponent} {...restProps}>{children}</Root>
		)
	}
}

export default Options
