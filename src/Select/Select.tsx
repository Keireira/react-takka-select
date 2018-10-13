import * as React from 'react'

import { ArrowDown } from '../Icon'

import { SelectProps, SelectState } from './Select.d'
import Root, { InputContainer, Input, Indicators, Indicator, RotateIndicator, Options, Option } from './styles.js'

class Select extends React.PureComponent<SelectProps, SelectState> {
	static defaultProps = {
		valueKey: 'value',
		labelKey: 'label',
		options: [],
	}

	state = {
		isOpened: false,
	}

	hideOptions = (): void => this.setState({ isOpened: false })

	showOptions = (): void => this.setState({ isOpened: true })

	onSelectHd = (event) => {
		const { onSelect, options, labelKey } = this.props

		if (typeof onSelect === 'function') {
			const finded = options.find((option) => option[labelKey] === event.target.innerText)

			onSelect(finded)
		}
	}

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, isSearchable } = this.props
		const { isOpened } = this.state

		return (
			<Root>
				<InputContainer>
					<Input
						onFocus={this.showOptions}
						onBlur={this.hideOptions}
						value={this.props.value[labelKey]}
						readOnly={!isSearchable}
					/>

					<Indicators>
						{(isLoading) && (
							<Indicator/>
						)}

						<RotateIndicator isOpened={isOpened}>
							<ArrowDown/>
						</RotateIndicator>
					</Indicators>
				</InputContainer>

				{((typeof isForcedOpened === 'boolean') ? isForcedOpened : isOpened) && (
					<Options>
						{options.map((option) => {
							return (
								<Option
									key={option[valueKey]}
									onMouseDown={this.onSelectHd}
								>
									{option[labelKey]}
								</Option>
							)
						})}
					</Options>
				)}
			</Root>
		)
	}
}

export default Select
