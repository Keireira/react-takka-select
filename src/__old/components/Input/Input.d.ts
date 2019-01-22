import { FocusId } from 'Select/Select.d'

export interface InputProps {
	CustomComponent: React.ReactType | keyof JSX.IntrinsicElements;
	forwardRed: any;

	onFocus?: (event: any) => void;
	onBlur?: (event: any) => void;
	value?: string;
	readOnly?: boolean;
}
