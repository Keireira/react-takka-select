import * as React from 'react'

import { SelectProvider } from '../context'
import { Option, Indicator } from '../components'
import { Body, InputWrapepr, Input, Options, Indicators } from './Select.styles'

const [ESCAPE, TAB, ENTER, SPACE, UP, DOWN, BACKSPACE] = [27, 9, 13, 32, 38, 40, 8]

const forcedBlur = () => {
	const element = document.activeElement as HTMLInputElement;

	if (element.type === 'text') {
		element.blur()
	}
};

class Select extends React.Component {
	static defaultProps = {
		isClearable: true,
		isSearchable: false,
		valueKey: 'value',
		labelKey: 'label',
		options: [],
	}

	state = {
		isOpened: false,
		isFocused: false,
		currentFocusId: 0,
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.clickOutsideHd)
		window.addEventListener('keydown', this.onKeyDownHd)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.clickOutsideHd)
		window.removeEventListener('keydown', this.onKeyDownHd)
	}

	wrapper: React.RefObject<any> = React.createRef();

	getContext = () => {
		return {
			focusOption: this.focusOption,
			selectOption: this.selectOption,
		}
	};

	toggleMenu = () => {
		this.setState((prevState) => ({
			isOpened: !prevState.isOpened,
		}))
	};

	closeOptions = () => {
		this.setState({ isOpened: false, isFocused: false }, forcedBlur)
	}

	clickOutsideHd = (event: MouseEvent) => {
		const { current } = this.wrapper

		if (current && !current.contains(event.target)) {
			this.setState({ isOpened: false })
		}
	};

	selectOption = (forcedFocusId?: string | number) => {
		const { options, valueKey, onSelect } = this.props
		const { currentFocusId } = this.state

		const realFocusId = forcedFocusId || currentFocusId
		const findedItem = options.find((option) => option[valueKey] === realFocusId)

		if (typeof onSelect === 'function') {
			onSelect(findedItem)

			this.closeOptions()
		}
	}

	onKeyDownHd = ({ keyCode }: KeyboardEvent) => {
		const { isOpened, currentFocusId } = this.state

		if (!isOpened) return

		switch (keyCode) {
			case ESCAPE: return this.closeOptions()

			case BACKSPACE: {
				if (!this.props.isSearchable) {
					this.clearInput()
				}

				break
			}

			// case TAB:
			case ENTER:
			case SPACE: {
				this.focusOption(currentFocusId)
				this.selectOption(currentFocusId)

				break
			}

			case UP: return this.focusOption(this.getNextFocusId(-1))

			case DOWN: return this.focusOption(this.getNextFocusId(1))

			default: return undefined
		}
	};

	clearInput = () => {
		const { onSelect } = this.props

		if (typeof onSelect === 'function') {
			onSelect(undefined)

			this.setState({ isOpened: true })
		}
	}

	onFocusHd = () => {
		this.setState({ isOpened: true, isFocused: true })
	};

	onBlurHd = () => {
		this.setState({ isFocused: false })
	}

	onInputHd = () => {
		this.setState({ isOpened: true })
	};

	getNextFocusId = (shift: number): number => {
		const { length: total } = this.props.options
		const { currentFocusId } = this.state

		return (total + currentFocusId + shift) % total
	};

	focusOption = (nextFocusId: number) => {
		this.setState({
			currentFocusId: nextFocusId,
		})
	}

	onOptionSelectHd = () => {
		this.selectOption()
	}

	setFocusId = (nextFocusId) => {
		this.focusOption(nextFocusId)
	}

	render() {
		const { options, valueKey, labelKey, isSearchable, isClearable } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
			<SelectProvider value={this.getContext()}>
				<Body ref={this.wrapper}>
					<InputWrapepr>
						<Input
							type="text"
							tabIndex={1}
							value={this.props.value ? this.props.value[labelKey] : ''}
							onFocus={this.onFocusHd}
							onBlur={this.onBlurHd}
							onChange={this.onInputHd}
							readOnly={!isSearchable}
						/>

						<Indicators>
							{isClearable && (
								<Indicator name="clear" onMouseUp={this.clearInput}/>
							)}

							<Indicator name="arrow-down" isActive={isOpened} onMouseUp={this.toggleMenu}/>
						</Indicators>
					</InputWrapepr>

					{isOpened && (
						<Options>
							{options.map((option) => {
								const value = option[valueKey]
								const isActive = (value === currentFocusId)

								return (
									<Option key={value} value={value} isActive={isActive}>
										{option[labelKey]}
									</Option>
								)}
							)}
						</Options>
					)}
				</Body>
			</SelectProvider>
		)
	}
}

export default Select
