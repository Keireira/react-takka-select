import * as React from 'react'

import { SelectProps, SelectState } from './Select.d'
import Root, { InputContainer, Input, Indicators, Indicator, Options, Option } from './styles'

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
		const { isForcedOpened, options, valueKey, labelKey } = this.props
		const { isOpened } = this.state

		return (
			<Root>
				<InputContainer>
					<Input
						onFocus={this.showOptions}
						onBlur={this.hideOptions}
					/>

					<Indicators>
						<Indicator/>
						<Indicator/>
					</Indicators>
				</InputContainer>

				{((typeof isForcedOpened === 'boolean') ? isForcedOpened : isOpened) && (
					<Options>
						{options.map((option) => {
							return (
								<Option key={option[valueKey]}>{option[labelKey]}</Option>
							)
						})}
					</Options>
				)}
			</Root>
		)
	}
}

export default Select
