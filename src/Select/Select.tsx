import * as React from 'react'

import Root, { InputContainer, Input, Indicators, Indicator, Options, Option } from './styles'

class Select extends React.PureComponent {
	render() {
		return (
			<Root>
				<InputContainer>
					<Input/>

					<Indicators>
						<Indicator/>
						<Indicator/>
					</Indicators>
				</InputContainer>

				<Options>
					<Option>Option 1</Option>
					<Option>Option 2</Option>
				</Options>
			</Root>
		)
	}
}

export default Select
