import * as React from 'react'

import { KEYCODES } from '@local/constants'
import { noop, match, forcedBlur } from '@local/helpers'
import { Option, Indicator, Input } from '@local/components'
import { SelectProvider, ContextType } from '@local/context'

import { SelectProps } from './Select.d'
import { Body, Options, Indicators } from './Select.styles'

const { ESCAPE, ENTER, SPACE, UP, DOWN, BACKSPACE } = KEYCODES

const initialState = {
	isOpened: false,
	isFocused: false,
	currentFocusId: 0,
}

type State = Readonly<typeof initialState>

class Select extends React.PureComponent<SelectProps, State> {
	static defaultProps = {
		isClearable: true,
		isSearchable: false,
		valueKey: 'value',
		labelKey: 'label',
		options: [],
		onSelect: noop,
	};

	state = initialState;

	componentDidMount() {
		document.addEventListener('mousedown', this.onClickOutside)
		window.addEventListener('keydown', this.onKeyDown)
	};

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.onClickOutside)
		window.removeEventListener('keydown', this.onKeyDown)
	};

	wrapper: React.RefObject<any> = React.createRef();

	getContext = (): ContextType => ({
		focusOption: this.focusOption,
		selectOption: this.selectOption,
	});

	onClickOutside = (event: MouseEvent) => {
		const { current } = this.wrapper

		if (current && !current.contains(event.target)) {
			this.setState({ isOpened: false })
		}
	};

	onKeyDown = ({ keyCode }: KeyboardEvent) => {
		const { isSearchable } = this.props
		const { currentFocusId, isOpened } = this.state

		if (!isOpened) return

		match(keyCode)
			.on((x) => (x === ESCAPE), this.closeOptions)
			.on((x) => (x === BACKSPACE && !isSearchable), this.clearInput)
			.on((x) => ([ENTER, SPACE].includes(x)), () => {
				this.focusOption(currentFocusId)
				this.selectOption(currentFocusId)
			})
			.on((x) => (x === UP), () => {
				this.focusOption(this.getNextFocusId(-1))
			})
			.on((x) => (x === DOWN), () => {
				this.focusOption(this.getNextFocusId(1))
			})
	};

	closeOptions = () => {
		this.setState({ isOpened: false, isFocused: false }, forcedBlur)
	};

	clearInput = () => {
		this.props.onSelect(undefined)

		this.setState({ isOpened: true })
	};

	focusOption = (currentFocusId: number) => this.setState({ currentFocusId });

	selectOption = (forcedFocusId?: string | number) => {
		const { options, valueKey, onSelect } = this.props
		const { currentFocusId } = this.state

		const realFocusId = forcedFocusId || currentFocusId
		const findedItem = options.find((option) => option[valueKey] === realFocusId)

		onSelect(findedItem)

		this.closeOptions()
	};

	getNextFocusId = (shift: number): number => {
		const { length: total } = this.props.options
		const { currentFocusId } = this.state

		return (total + currentFocusId + shift) % total
	};

	toggleMenu = () => {
		this.setState((prevState) => ({
			isOpened: !prevState.isOpened,
		}))
	};

	onFocusHd = () => this.setState({ isOpened: true, isFocused: true });

	onBlurHd = () => this.setState({ isFocused: false });

	onInputHd = () => this.setState({ isOpened: true });

	render() {
		const { options, valueKey, labelKey, isSearchable, isClearable, value } = this.props
		const { isOpened, currentFocusId } = this.state

		return (
			<SelectProvider value={this.getContext()}>
				<Body ref={this.wrapper}>
					<Input
						value={value ? value[labelKey] : ''}
						isSearchable={isSearchable}

						onBlur={this.onBlurHd}
						onFocus={this.onFocusHd}
						onChange={this.onInputHd}
					>
						<Indicators>
							{isClearable && (
								<Indicator name="clear" onMouseUp={this.clearInput}/>
							)}

							<Indicator name="arrow-down" type="rotate" isActive={isOpened} onMouseUp={this.toggleMenu}/>
						</Indicators>
					</Input>

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
	};
}

export default Select
