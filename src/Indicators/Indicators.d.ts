export interface IndicatorsProps {
	children: JSX.Element | string | number | Element[] | JSX.Element[];
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;
}
