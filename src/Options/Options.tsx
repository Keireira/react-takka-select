import * as React from 'react'

import Root from './styles'
import { OptionsProps } from './Options.d'

const Options = ({ children, ...restProps }: OptionsProps) => (
	<Root {...restProps}>
		{children}
	</Root>
)

export default Options
