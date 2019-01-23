import styled from 'styled-components'

import { IndicatorStyledProps } from './Indicator.d'

export const DefaultIndicator = styled.div`
	width: 40px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	fill: #2f3640;

	cursor: pointer;
	border-radius: 50%;
	transition: all 0.2s ease-in;

	&:hover {
		background-color: #f4f4f4;
	}
`

export const RotateIndicator = styled(DefaultIndicator)<IndicatorStyledProps>`
	transition: transform 0.2s ease-in-out;
	transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : ''};
`
