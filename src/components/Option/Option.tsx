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

	render() {
		const { children, CustomComponent } = this.props

		return (
			<Root as={CustomComponent} onMouseDown={this.onSelectHd}>
				{children}
			</Root>
		)
	}
}

export default Option
