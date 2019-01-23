import * as React from 'react'

const noop = () => {}

const SelectContext = React.createContext({
	focusOption: noop,
	selectOption: noop,
})

export const SelectProvider = SelectContext.Provider
export const SelectConsumer = SelectContext.Consumer

export default SelectContext

