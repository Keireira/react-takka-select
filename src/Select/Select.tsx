import * as React from 'react'

import { ArrowDown } from 'components/Icon'
import Indicator, { RotateIndicator } from 'components/Indicator'
import { Option, Indicators, Input, Options, InputWrapper } from 'components'

import Root from './styles'
import { SelectProps, SelectState } from './Select.d'

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
				<InputWrapper>
					<Input
						onFocus={this.showOptions}
						onBlur={this.hideOptions}
						value={this.props.value[labelKey]}
						readOnly={!isSearchable}
						CustomComponent={components.input}
					/>

					<Indicators CustomComponent={components.indicators}>
						{(isLoading) && (
							<Indicator>
								...
							</Indicator>
						)}

						<RotateIndicator isActive={isOpened}>
							<ArrowDown/>
						</RotateIndicator>
					</Indicators>
				</InputWrapper>

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
