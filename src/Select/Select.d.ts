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
		[key: string]: any,
	};
	onSelect: (newValue: { [anyKey: string]: any }) => void;
}

export interface SelectState {
	isOpened: boolean;
}
