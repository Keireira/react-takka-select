import styled from 'styled-components'
import { IndicatorProps } from './Indicator.d'

const Indicator = styled.div`
	width: 40px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	fill: #2f3640;
`

export const RotateIndicator = styled(Indicator)<IndicatorProps>`
	transition: transform 0.2s ease-in-out;
	transform: ${(props) => props.isActive ? 'rotate(180deg)' : ''};
`

export default Indicator
