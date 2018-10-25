import * as React from 'react'

const SelectContext = React.createContext({
	isOpened: undefined,
	currentFocusId: undefined,

	dropFocus: undefined,
	setCurrentFocusId: undefined,
	selectCurrentOptionById: undefined,
})

export const SelectProvider = SelectContext.Provider
export const SelectConsumer = SelectContext.Consumer

