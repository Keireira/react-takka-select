import * as React from 'react'

import { SelectProvider } from 'context'

import { ArrowDown } from 'components/Icon'
import Indicator, { RotateIndicator } from 'components/Indicator'
import { Option, Indicators, Input, Options, InputWrapper, SelectBody } from 'components'

import { Props, FocusId } from './Select.d'
import { getNextFocusId } from './Select.utils'

const initialState = {
	isOpened: false,
	currentFocusId: 0,
}

type State = Readonly<typeof initialState>

class Select extends React.PureComponent<Props, State> {
	static defaultProps = {
		valueKey: 'value',
		labelKey: 'label',
		components: {},
		options: [],
	};

	readonly state: State = initialState;

	input: any = React.createRef();

	get contextProps() {
		const { isOpened, currentFocusId } = this.state

		return {
			isOpened,
			currentFocusId,
			dropFocus: this.dropFocus,
			setCurrentFocusId: this.setCurrentFocusId,
			selectCurrentOptionById: this.selectCurrentOptionById,
		}
	};

	dropFocus = () => this.input.current.blur();

	hideOptions = () => this.setState({ isOpened: false });

	showOptions = () => this.setState({ isOpened: true });

	setCurrentFocusId = (nextFocusId: FocusId) => {
		const maxLength = this.props.options.length - 1

		this.setState({
			currentFocusId: getNextFocusId(nextFocusId, maxLength),
		})
	};

	selectCurrentOptionById = (forcedOptionId?: FocusId) => {
		const { options, valueKey } = this.props
		const { currentFocusId } = this.state

		const realFocusId = forcedOptionId || currentFocusId
		const findedOption = options.find((option) => option[valueKey] === realFocusId)

		this.props.onSelect(findedOption)
	};

	render() {
		const { isForcedOpened, options, valueKey, labelKey, isLoading, isSearchable, components } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
			<SelectProvider value={this.contextProps}>
				<SelectBody>
					<InputWrapper>
						<Input
							forwardRed={this.input}
							CustomComponent={components.input}

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

								return (
									<Option
										key={value}
										optionFocusId={value}
										isActive={value === currentFocusId}

										CustomComponent={components.option}
										onSelect={this.selectCurrentOptionById}
									>
										{option[labelKey]}
									</Option>
								)
							})}
						</Options>
					)}
				</SelectBody>
			</SelectProvider>
		)
	};
}

export default Select
