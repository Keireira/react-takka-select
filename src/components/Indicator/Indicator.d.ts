import * as React from 'react'

export type IndicatorStyledProps = {
	isActive?: boolean;
}

export type IndicatorProps = IndicatorStyledProps & {
	name: string;
	type?: string;
} & React.HTMLAttributes<{}>
