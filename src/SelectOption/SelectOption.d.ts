type Option = {
	[key: string]: string;
}

export interface SelectOptionProps {
	children: JSX.Element | string | number;
	onSelect: (finded: Option) => void;
	options: Option[];
	labelKey: string;
}
