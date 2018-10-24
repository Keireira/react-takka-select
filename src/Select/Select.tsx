import * as React from 'react'

import { ArrowDown } from 'components/Icon'
import Indicator, { RotateIndicator } from 'components/Indicator'
import { Option, Indicators, Input, Options, InputWrapper } from 'components'

import Root from './Select.styles'
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
		currentFocusId: 0,
	}

	hideOptions = (): void => this.setState({ isOpened: false })

	showOptions = (): void => this.setState({ isOpened: true })

	setCurrentFocusId = (nextFocusId: string | number): void => {
		const minLength = 0
		const maxLength = this.props.options.length - 1

		const getNextFocusId = () => {
			if (nextFocusId > maxLength) return minLength

			if (nextFocusId < minLength) return maxLength

			return nextFocusId
		}

		this.setState({
			currentFocusId: getNextFocusId(),
		})
	}

	selectCurrentOptionById = (): void => {
		const { options, onSelect, valueKey } = this.props
		const { currentFocusId } = this.state

		const findedOption = options.find((option) => option[valueKey] === currentFocusId)

		onSelect(findedOption)
	}

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, onSelect, isSearchable, components } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
			<Root>
				<InputWrapper>
					<Input
						onFocus={this.showOptions}
						onBlur={this.hideOptions}
						value={this.props.value[labelKey]}
						readOnly={!isSearchable}
						isOpened={isOpened}
						CustomComponent={components.input}

						currentFocusId={currentFocusId}
						setCurrentFocusId={this.setCurrentFocusId}
						selectCurrentOptionById={this.selectCurrentOptionById}
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
						{options.map((option) => {
							const isActive = option[valueKey] === currentFocusId

							return (
								<Option
									key={option[valueKey]}
									isActive={isActive}
									onSelect={onSelect}
									options={options}
									labelKey={labelKey}
									CustomComponent={components.option}
									optionFocusId={option[valueKey]}
									setCurrentFocusId={this.setCurrentFocusId}
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
