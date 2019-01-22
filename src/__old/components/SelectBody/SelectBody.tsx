import * as React from 'react'

import Root from './SelectBody.styles'
import { SelectBodyProps } from './SelectBody.d'

// @TODO: Remove ts-ignore after new typings release
// @ts-ignore
const SelectBody = React.memo((props: SelectBodyProps) => {
	const { children, CustomComponent, ...restProps } = props

	return (
		<Root as={CustomComponent} {...restProps}>{children}</Root>
	)
})

export default SelectBody
