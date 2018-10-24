export interface InputProps {
	onFocus?: (event: any) => void;
	onBlur?: (event: any) => void;
	value?: string;
	readOnly?: boolean;
	isOpened?: boolean;
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;
	currentFocusId: string | number;
	setCurrentFocusId: (nextFocusId: string | number) => void;
	selectCurrentOptionById: () => void;
}
