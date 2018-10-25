import * as React from 'react'

import { SelectConsumer } from 'context'

import Root from './Option.styles'
import { OptionProps } from './Option.d'


class Option extends React.PureComponent<OptionProps> {
	static contextType = SelectConsumer;

	onSelectHd = (): void => {
		const { onSelect, optionFocusId } = this.props

		this.setFocusId()
		onSelect(optionFocusId)
		this.context.dropFocus()
	};

	setFocusId = (): void => {
		const { optionFocusId } = this.props

		this.context.setCurrentFocusId(optionFocusId)
	};

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
	};
}

export default Option
