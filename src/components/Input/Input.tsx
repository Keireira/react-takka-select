import * as React from 'react'

import Root from './Input.styles'
import { InputProps } from './Input.d'

const TAB = 9
const ENTER = 13
const SPACE = 32
const ESCAPE = 27
const UP = 38
const DOWN = 40

class Input extends React.PureComponent<InputProps> {
	input: any = React.createRef()

	onKeyDownHd = ({ keyCode }) => {
		const { isOpened } = this.props

		if (!isOpened) return

		switch (keyCode) {
			case ESCAPE: return this.closeOptions()

			case TAB:
			case ENTER:
			case SPACE: return this.selectFocusedOption()

			case UP: return this.focusPrevOption()

			case DOWN: return this.focusNextOption()

			default: return undefined
		}
	}

	closeOptions = () => {
		this.input.current.blur()
	}

	selectFocusedOption = () => {
		const { selectCurrentOptionById } = this.props

		if (typeof selectCurrentOptionById === 'function') {
			selectCurrentOptionById()

			this.closeOptions()
		}
	}

	focusPrevOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.props

		if (typeof setCurrentFocusId === 'function') {
			setCurrentFocusId(Number(currentFocusId) - 1)
		}
	}

	focusNextOption = () => {
		const { setCurrentFocusId, currentFocusId } = this.props

		if (typeof setCurrentFocusId === 'function') {
			setCurrentFocusId(Number(currentFocusId) + 1)
		}
	}

	render() {
		const { CustomComponent, ...restProps } = this.props

		return (
			<Root
				ref={this.input}
				as={CustomComponent}
				{...restProps}
				onKeyDown={this.onKeyDownHd}
			/>
		)
	}
}

export default Input
