import styled from '@styled'
import { rgba } from '@helpers'

export const Option = styled.li`
	list-style: none;
	padding: 12px 0 12px 20px;

	cursor: pointer;

	transition: background 0.15s ease;
	background-color: ${rgba('#2f3640', 0.1)};

	&:hover {
		background-color: ${rgba('#fbc531', 0.6)};
	}
`

export const Options = styled.ul`
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;

	margin: 0;
	padding: 0;
`

interface IndicatorProps {
  isOpened?: boolean;
}

export const Indicator = styled<IndicatorProps, 'div'>('div')`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 40px;
	width: 40px;
`

export const RotateIndicator = styled(Indicator)`
	transition: transform 0.2s ease-in-out;
	transform: ${(props) => props.isOpened ? 'rotate(180deg)' : ''};
`

export const Indicators = styled.div`
	display: flex;
`

export const Input = styled.input`
	flex-grow: 1;
	padding: 12px 0 12px 20px;

	color: #2f3640;
	font-size: 16px;
	line-height: 19px;

	outline: none;
	border: none;

	background-color: transparent;

	&[disabled] {
		cursor: not-allowed;
	}

	&[readonly] {
		cursor: pointer;
	}
`

export const InputContainer = styled.div`
	border: 1px solid #2f3640;
	background-color: #fff;
	display: flex;
	align-items: center;
`

export default styled.div`
	position: relative;

	line-height: 19px;
	font-size: 16px;
	color: #2f3640;
`
