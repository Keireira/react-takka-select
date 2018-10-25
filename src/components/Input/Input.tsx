import * as React from 'react'

import Root from './Input.styles'
import { InputProps } from './Input.d'

import { SelectConsumer } from 'context'

const [ESCAPE, TAB, ENTER, SPACE, UP, DOWN] = [27, 9, 13, 32, 38, 40]

class Input extends React.PureComponent<InputProps> {
	static contextType = SelectConsumer;

	onKeyDownHd = ({ keyCode }) => {
		const { isOpened, dropFocus } = this.context

		if (!isOpened) return

		switch (keyCode) {
			case ESCAPE: return dropFocus()

			case TAB:
			case ENTER:
			case SPACE: return this.selectOption()

			case UP: return this.focusPrevOption()

			case DOWN: return this.focusNextOption()

			default: return undefined
		}
	};

	selectOption = () => {
		const { selectCurrentOptionById, dropFocus } = this.context

		selectCurrentOptionById()
		dropFocus()
	}

	focusPrevOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.context

		setCurrentFocusId(currentFocusId - 1)
	};

	focusNextOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.context

		setCurrentFocusId(currentFocusId + 1)
	};

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
	};
}

export default Input
