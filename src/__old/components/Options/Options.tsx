import * as React from 'react'

import Root from './Options.styles'
import { OptionsProps } from './Options.d'

// @TODO: Remove ts-ignore after new typings release
// @ts-ignore
const Options = React.memo((props: OptionsProps) => {
	const { children, CustomComponent, ...restProps } = props

	return (
		<Root as={CustomComponent} {...restProps}>{children}</Root>
	)
})

export default Options
