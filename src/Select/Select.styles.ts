import styled from 'styled-components'

export const Body = styled.div`
	position: relative;

	color: #2f3640;
	font-size: 16px;
	line-height: 19px;
`

export const Input = styled.input`
	flex-grow: 1;
	padding: 20px 0 20px 20px;

	color: #2f3640;
	font-size: 16px;
	line-height: 19px;

	border: none;
	outline: none;
	background-color: transparent;

	&[disabled] {
		cursor: not-allowed;
	}

	&[readonly] {
		cursor: pointer;
	}
`

export const InputWrapepr = styled.div`
	display: flex;
	align-items: center;

	background-color: #fff;
	padding-right: 10px;

	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const Option = styled.li`
	list-style: none;
	padding: 20px;

	cursor: pointer;
	transition: background 0.15s ease;

	${(props) => props.isActive ? 'background-color: #f4f4f4;' : ''}

	&:first-child {
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
	}

	&:last-child {
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}
`

export const Options = styled.ul`
	position: absolute;
	top: calc(100% + 5px);
	right: 0;
	left: 0;

	margin: 0;
	padding: 10px;

	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

export const Indicators = styled.div`
	display: flex;
`

export const Indicator = styled.div`
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

export const RotateIndicator = styled(Indicator)`
	transition: transform 0.2s ease-in-out;
	transform: ${(props) => props.isActive ? 'rotate(180deg)' : ''};
`
