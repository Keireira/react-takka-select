import * as React from 'react'

import Root from './styles'
import { SelectOptionProps } from './SelectOption.d'

class SelectOption extends React.PureComponent<SelectOptionProps> {
	onSelectHd = (event): void => {
		const { onSelect, options, labelKey } = this.props

		if (typeof onSelect === 'function') {
			const finded = options.find((option) => option[labelKey] === event.target.innerText)

			onSelect(finded)
		}
	}

	render() {
		const { children } = this.props

		return (
			<Root onMouseDown={this.onSelectHd}>
				{children}
			</Root>
		)
	}
}

export default SelectOption
