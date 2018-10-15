type Option = {
	[key: string]: any;
}

export interface SelectOptionProps {
	children: JSX.Element | string | number;
	onSelect: (finded: Option) => void;
	options: Option[];
	labelKey: string;
	CustomComponent?: any;
}
