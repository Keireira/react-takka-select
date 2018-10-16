type Option = {
	[key: string]: any;
}

export interface SelectOptionProps {
	children: JSX.Element | string | number | Element[] | JSX.Element[];
	onSelect: (finded: Option) => void;
	options: Option[];
	labelKey: string;
	CustomComponent?: React.ReactType | keyof JSX.IntrinsicElements;
}
