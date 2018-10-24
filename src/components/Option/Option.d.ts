import { FocusId } from 'Select/Select.d'

export interface OptionProps {
	children?: JSX.Element | string | number | Element[] | JSX.Element[];
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;

	isActive: boolean;

	optionFocusId: FocusId;
	onSelect: (forcedFocusId: FocusId) => void;
	setCurrentFocusId: (nextFocusId: FocusId) => void;
}
