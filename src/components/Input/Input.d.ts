import { FocusId } from 'Select/Select.d'

export interface InputProps {
	CustomComponent: React.ReactType | keyof JSX.IntrinsicElements;
	isOpened: boolean;
	myRef: any;
	dropFocus: () => void;
	currentFocusId: FocusId;
	setCurrentFocusId: (nextFocusId: FocusId) => void;
	selectCurrentOptionById: () => void;


	onFocus?: (event: any) => void;
	onBlur?: (event: any) => void;
	value?: string;
	readOnly?: boolean;
}
