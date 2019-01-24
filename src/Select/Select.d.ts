export type SelectProps = {
	isClearable?: boolean;
	isSearchable?: boolean;
	valueKey?: string;
	labelKey?: string;
	options: Object[];
	value: Object;

	onSelect: (selectedItem: Object) => void;
}

export type SelectState = {
	isOpened: boolean;
	isFocused: boolean;
	currentFocusId: number;
}
