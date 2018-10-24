import * as React from 'react'

import { ArrowDown } from 'components/Icon'
import Indicator, { RotateIndicator } from 'components/Indicator'
import { Option, Indicators, Input, Options, InputWrapper } from 'components'

import Root from './Select.styles'
import { getNextFocusId } from './Select.utils'
import { SelectProps, SelectState, FocusId } from './Select.d'

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

	input: any = React.createRef()

	dropFocus = () => {
		this.input.current.blur()
	}

	hideOptions = (): void => this.setState({ isOpened: false })

	showOptions = (): void => this.setState({ isOpened: true })

	setCurrentFocusId = (nextFocusId: FocusId): void => {
		const maxLength = this.props.options.length - 1

		this.setState({
			currentFocusId: getNextFocusId(nextFocusId, maxLength),
		})
	}

	selectCurrentOptionById = (forcedOptionId?: FocusId): void => {
		const { options, valueKey } = this.props
		const { currentFocusId } = this.state

		const realFocusId = forcedOptionId || currentFocusId
		const findedOption = options.find((option) => option[valueKey] === realFocusId)

		this.props.onSelect(findedOption)

		this.dropFocus()
	}

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, isSearchable, components } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
			<Root>
				<InputWrapper>
					<Input
						myRef={this.input}
						isOpened={isOpened}
						dropFocus={this.dropFocus}
						CustomComponent={components.input}

						currentFocusId={currentFocusId}
						setCurrentFocusId={this.setCurrentFocusId}
						selectCurrentOptionById={this.selectCurrentOptionById}

						readOnly={!isSearchable}
						onBlur={this.hideOptions}
						onFocus={this.showOptions}
						value={this.props.value[labelKey]}
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
							const value = option[valueKey]
							const isActive = (value === currentFocusId)

							return (
								<Option
									key={value}
									CustomComponent={components.option}
									onSelect={this.selectCurrentOptionById}

									isActive={isActive}
									optionFocusId={value}
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
