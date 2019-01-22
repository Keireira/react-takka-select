import { SFC } from 'react'
import { FocusId } from 'Select/Select.d'

export interface OptionProps {
	children?: React.ReactNode;
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;

	isActive: boolean;

	optionFocusId: FocusId;
	onSelect: (forcedFocusId: FocusId) => void;
}
