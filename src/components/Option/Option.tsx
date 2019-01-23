import * as React from 'react'

import { OptionProps } from './Option.d'
import StyledOption from './Option.styles'
import { SelectConsumer } from '../../context'

class Option extends React.PureComponent<OptionProps> {
	static contextType: any = SelectConsumer;

	focusOption = () => {
		this.context.focusOption(this.props.value)
	};

	selectOption = () => {
		this.context.selectOption()
	}

	render() {
		const { isActive, children } = this.props

		return (
			<StyledOption
				isActive={isActive}
				onMouseEnter={this.focusOption}
				onMouseDown={this.selectOption}
			>
				{children}
			</StyledOption>
		)
	}
}

// TODO: Migrate to useContext hook after fixing rerender problems
// https://github.com/facebook/react/issues/14110

// const Option = ({ isActive, children, value }: OptionProps) => {
// 	const { selectOption, focusOption } = React.useContext(Context)

// 	return (
// 		<StyledOption
// 			isActive={isActive}
// 			onMouseDown={() => selectOption()}
// 			onMouseEnter={() => focusOption(value)}
// 		>
// 			{children}
// 		</StyledOption>
// 	)
// }

export default Option
