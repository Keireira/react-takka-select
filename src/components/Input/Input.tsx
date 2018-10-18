import * as React from 'react'

import Root from './styles'
import { InputProps } from './Input.d'

class Input extends React.PureComponent<InputProps> {
	render() {
		const { CustomComponent, ...restProps } = this.props

		return (
			<Root as={CustomComponent} {...restProps}/>
		)
	}
}

export default Input
