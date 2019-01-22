import * as React from 'react'

import Root from './InputWrapper.styles'
import { InputWrapperProps } from './InputWrapper.d'


const InputWrapper = React.forwardRef((props: InputWrapperProps, ref) => {
	const { children, CustomComponent, ...restProps } = props

	return (
		// @ts-ignore
		<Root as={CustomComponent} ref={ref} {...restProps}>{children}</Root>
	)
})

export default InputWrapper
