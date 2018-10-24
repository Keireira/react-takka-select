import * as React from 'react'

import Root from './Option.styles'
import { OptionProps } from './Option.d'

class Option extends React.PureComponent<OptionProps> {
	onSelectHd = (event): void => {
		const { onSelect, options, labelKey } = this.props

		if (typeof onSelect === 'function') {
			const finded = options.find((option) => option[labelKey] === event.target.innerText)

			onSelect(finded)
		}
	}

	onMouseEnter = () => {
		const { setCurrentFocusId, optionFocusId } = this.props

		if (typeof setCurrentFocusId === 'function') {
			setCurrentFocusId(optionFocusId)
		}
	}

	render() {
		const { children, CustomComponent, isActive } = this.props

		return (
			<Root
				as={CustomComponent}
				onMouseDown={this.onSelectHd}
				onMouseEnter={this.onMouseEnter}
				isActive={isActive}
			>
				{children}
			</Root>
		)
	}
}

export default Option
