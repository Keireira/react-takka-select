import * as React from 'react'

import { Icon } from '../components'
import { Body, InputWrapepr, Input, Options, Option, Indicators, Indicator, RotateIndicator } from './Select.styles'

const [ESCAPE, TAB, ENTER, SPACE, UP, DOWN, BACKSPACE] = [27, 9, 13, 32, 38, 40, 8]

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

	wrapper = React.createRef();

	toggleMenu = () => {
		this.setState((prevState) => ({
			isOpened: !prevState.isOpened,
		}))
	};

	clickOutsideHd = (event: MouseEvent & { target: EventTarget }) => {
		const { current } = this.wrapper

		if (current && !current.contains(event.target)) {
			this.setState({ isOpened: false })
		}
	};

	selectItem = () => {
		const { options, valueKey, onSelect } = this.props
		const { currentFocusId } = this.state

		const findedItem = options.find((option) => option[valueKey] === currentFocusId)

		if (typeof onSelect === 'function') {
			onSelect(findedItem)
		}
	}

	forcedBlur = () => {
		const element = document.activeElement as HTMLInputElement;

		if (element.type === 'text') {
			element.blur()
		}
	};

	onKeyDownHd = ({ keyCode }: KeyboardEvent) => {
		const { isOpened, currentFocusId } = this.state

		if (!isOpened) return

		switch (keyCode) {
			case ESCAPE: {
				this.setState({ isOpened: false, isFocused: false }, this.forcedBlur)

				break
			}

			case BACKSPACE: {
				if (!this.props.isSearchable) {
					this.clearInput()
				}

				break
			}

			// case TAB:
			case ENTER:
			case SPACE: {
				this.selectOption(currentFocusId)
				this.setState({ isOpened: false }, this.selectItem)

				break
			}

			case UP: return this.selectOption(this.getNextFocusId(-1))

			case DOWN: return this.selectOption(this.getNextFocusId(1))

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

	selectOption = (nextFocusId: number) => {
		this.setState({
			currentFocusId: nextFocusId,
		})
	}

	onOptionSelectHd = () => {
		this.selectItem()
	}

	setFocusId = (nextFocusId) => {
		this.selectOption(nextFocusId)
	}

	render() {
		const { options, valueKey, labelKey, isSearchable, isClearable } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
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
							<Indicator onMouseUp={this.clearInput}>
								<Icon name="clear"/>
							</Indicator>
						)}

						<RotateIndicator isActive={isOpened} onMouseUp={this.toggleMenu}>
							<Icon name="arrow-down"/>
						</RotateIndicator>
					</Indicators>
				</InputWrapepr>

				{isOpened && (
					<Options>
						{options.map((option) => {
							const value = option[valueKey]

							return (
								<Option
									key={value}
									isActive={value === currentFocusId}
									onMouseDown={this.onOptionSelectHd}
									onMouseEnter={() => this.setFocusId(value) }
								>
									{option[labelKey]}
								</Option>
							)}
						)}
					</Options>
				)}
			</Body>
		)
	}
}

export default Select
