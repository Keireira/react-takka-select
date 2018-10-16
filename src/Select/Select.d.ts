export interface SelectProps {
	isForcedOpened: boolean;
	labelKey: string;
	valueKey: string;
	options: {
		[anyKey: string]: any,
	}[];
	isLoading: boolean;
	value: {
		[anyKey: string]: any,
	};
	isSearchable: boolean;
	components: {
		[key: string]: React.ReactType | keyof JSX.IntrinsicElements,
	};
	onSelect: (newValue: { [anyKey: string]: any }) => void;
}

export interface SelectState {
	isOpened: boolean;
}
