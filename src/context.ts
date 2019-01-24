import * as React from 'react'

import { noop } from '@local/helpers'

export type ContextType = {
	focusOption: (nextFocusId: number) => void;
	selectOption: () => void;
}

const SelectContext = React.createContext<ContextType>({
	focusOption: noop,
	selectOption: noop,
})

export const SelectProvider = SelectContext.Provider
export const SelectConsumer = SelectContext.Consumer

export default SelectContext

