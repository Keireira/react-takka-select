import * as React from 'react'
import styled from 'styled-components'

import Select from 'react-takka-select'

const options = [
	{ id: 0, label: 'The quick' },
	{ id: 1, label: 'Brown Fox' },
	{ id: 2, label: 'Jumps over' },
	{ id: 3, label: 'The lazy dog' },
]

const Option = styled.li`
	background-color: lightpink;

	&:hover {
		background-color: lightblue;
	}
`

class App extends React.PureComponent {
	state = {
		value: options[0],
	}

	onSelect = (value) => {
		this.setState({ value })
	}

	render() {
		return (
			<div className="app">
				<Select
					value={this.state.value}
					valueKey="id"
					options={options}
					onSelect={this.onSelect}
					isSearchable={false}
					components={{
						option: Option,
					}}
				/>
			</div>
		)
	}
}

export default App
