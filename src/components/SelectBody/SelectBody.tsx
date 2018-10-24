import * as React from 'react'

import Root from './SelectBody.styles'

class SelectBody extends React.PureComponent {
	render() {
		return (
			<Root>{this.props.children}</Root>
		)
	}
}

export default SelectBody
