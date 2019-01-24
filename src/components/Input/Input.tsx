import * as React from 'react'

import { InputProps } from './Input.d'
import { Wrapper, InputComp } from './Input.styles'

const Input = (props: InputProps) => {
	const { children, isSearchable, ...restProps } = props

	return (
		<Wrapper>
			<InputComp type="text" tabIndex={1} readOnly={!isSearchable} {...restProps}/>

			{children}
		</Wrapper>
	)
}

Input.defaultProps = {
	value: {},
}

export default Input
