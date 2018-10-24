import * as React from 'react'

import Root from './Input.styles'
import { InputProps } from './Input.d'

const [ESCAPE, TAB, ENTER, SPACE, UP, DOWN] = [27, 9, 13, 32, 38, 40]

class Input extends React.PureComponent<InputProps> {
	input: any = React.createRef()

	onKeyDownHd = ({ keyCode }) => {
		const { isOpened } = this.props

		if (!isOpened) return

		switch (keyCode) {
			case ESCAPE: return this.props.dropFocus()

			case TAB:
			case ENTER:
			case SPACE: return this.props.selectCurrentOptionById()

			case UP: return this.focusPrevOption()

			case DOWN: return this.focusNextOption()

			default: return undefined
		}
	}

	focusPrevOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.props

		setCurrentFocusId(currentFocusId - 1)
	}

	focusNextOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.props

		setCurrentFocusId(currentFocusId + 1)
	}

	render() {
		const { CustomComponent, forwardRed, ...restProps } = this.props

		return (
			<Root
				ref={forwardRed}
				as={CustomComponent}
				{...restProps}
				onKeyDown={this.onKeyDownHd}
			/>
		)
	}
}

export default Input
