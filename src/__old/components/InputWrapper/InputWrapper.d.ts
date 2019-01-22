export interface InputWrapperProps {
	children: JSX.Element | string | number | Element[] | JSX.Element[] | null;
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;
}
