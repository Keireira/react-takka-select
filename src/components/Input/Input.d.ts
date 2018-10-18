export interface InputProps {
	onFocus?: (event: any) => void;
	onBlur?: (event: any) => void;
	value?: string;
	readOnly?: boolean;
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;
}
