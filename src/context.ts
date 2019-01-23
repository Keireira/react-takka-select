import * as React from 'react'

const SelectContext = React.createContext({
	focusOption: undefined,
	selectOption: undefined,
})

export const SelectProvider = SelectContext.Provider
export const SelectConsumer = SelectContext.Consumer

export default SelectContext

