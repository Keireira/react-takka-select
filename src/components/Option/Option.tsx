import * as React from 'react'

import Root from './Option.styles'
import { OptionProps } from './Option.d'

class Option extends React.PureComponent<OptionProps> {
	onSelectHd = (): void => {
		const { onSelect, optionFocusId } = this.props

		this.setFocusId()
		onSelect(optionFocusId)
	}

	setFocusId = (): void => {
		const { setCurrentFocusId, optionFocusId } = this.props

		setCurrentFocusId(optionFocusId)
	}

	render() {
		const { children, CustomComponent, isActive } = this.props

		return (
			<Root
				isActive={isActive}
				as={CustomComponent}

				onMouseDown={this.onSelectHd}
				onMouseEnter={this.setFocusId}
			>
				{children}
			</Root>
		)
	}
}

export default Option
