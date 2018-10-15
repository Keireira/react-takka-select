import * as React from 'react'

import { ArrowDown } from '../Icon'
import SelectOption from '../SelectOption'

import { SelectProps, SelectState } from './Select.d'
import Root, { InputContainer, Input, Indicators, Indicator, RotateIndicator, Options } from './styles.js'

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

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, onSelect, isSearchable } = this.props
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
						{(isLoading) && <Indicator/>}

						<RotateIndicator isOpened={isOpened}>
							<ArrowDown/>
						</RotateIndicator>
					</Indicators>
				</InputContainer>

				{((typeof isForcedOpened === 'boolean') ? isForcedOpened : isOpened) && (
					<Options>
						{options.map((option) => (
							<SelectOption key={option[valueKey]} onSelect={onSelect} options={options} labelKey={labelKey}>
								{option[labelKey]}
							</SelectOption>
						))}
					</Options>
				)}
			</Root>
		)
	}
}

export default Select
