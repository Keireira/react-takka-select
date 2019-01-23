import * as React from 'react'

export type OptionStyledProps = {
	isActive: boolean;
}

export type OptionProps = OptionStyledProps & {
	children: any;
	value: string | number;
} & React.HTMLAttributes<{}>
