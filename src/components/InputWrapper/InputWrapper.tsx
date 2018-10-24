import * as React from 'react'

import Root from './InputWrapper.styles'
import { InputWrapperProps } from './InputWrapper.d'

class InputWrapper extends React.PureComponent<InputWrapperProps> {
	render() {
		const { children, CustomComponent, ...restProps } = this.props

		return (
			<Root as={CustomComponent} {...restProps}>{children}</Root>
		)
	}
}

export default InputWrapper
