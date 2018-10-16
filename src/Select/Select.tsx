import * as React from 'react'

import { ArrowDown } from '../Icon'
import { Option, Indicators } from '..'
import Indicator, { RotateIndicator } from '../Indicator'

import { SelectProps, SelectState } from './Select.d'
import Root, { InputContainer, Input, Options } from './styles.js'

class Select extends React.PureComponent<SelectProps, SelectState> {
	static defaultProps = {
		valueKey: 'value',
		labelKey: 'label',
		components: {},
		options: [],
	}

	state = {
		isOpened: false,
	}

	hideOptions = (): void => this.setState({ isOpened: false })

	showOptions = (): void => this.setState({ isOpened: true })

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, onSelect, isSearchable, components } = this.props
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
							<Indicator>
								...
							</Indicator>
						)}

						<RotateIndicator isActive={isOpened}>
							<ArrowDown/>
						</RotateIndicator>
					</Indicators>
				</InputContainer>

				{((typeof isForcedOpened === 'boolean') ? isForcedOpened : isOpened) && (
					<Options>
						{options.map((option) => (
							<Option
								key={option[valueKey]}
								onSelect={onSelect}
								options={options}
								labelKey={labelKey}
								CustomComponent={components.option}
							>
								{option[labelKey]}
							</Option>
						))}
					</Options>
				)}
			</Root>
		)
	}
}

export default Select
