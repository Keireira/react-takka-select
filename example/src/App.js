import * as React from 'react'

import Select from 'react-takka-select'

const options = [
	{
		id: 0,
		label: 'The quick brown',
	},
	{
		id: 1,
		label: 'Fox jumps over',
	},
	{
		id: 2,
		label: 'The lazy dog',
	},
]

class App extends React.PureComponent {
	render() {
		return (
			<div className="app">
				<Select
					valueKey="id"
					options={options}
				/>
			</div>
		)
	}
}

export default App
