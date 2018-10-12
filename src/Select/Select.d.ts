export interface SelectProps {
	isForcedOpened: boolean;
	labelKey: string;
	valueKey: string;
	options: {
		[anyKey: string]: any,
	}[];
}

export interface SelectState {
	isOpened: boolean;
}
