import * as React from 'react'

export type InputProps = {
	isSearchable: boolean;
	children: React.ReactNode[] | React.ReactNode;
} & React.HTMLAttributes<{}>
