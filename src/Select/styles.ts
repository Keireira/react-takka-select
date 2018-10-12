import styled from 'styled-components'

export const Option = styled.li`

`

export const Options = styled.ul`

`

export const Indicators = styled.div`
	display: flex;
`

export const Indicator = styled.div`
	background-color: red;
	height: 40px;
	width: 40px;

	&:first-child {
		background-color: lightblue;
	}

	&:nth-of-type(2) {
		background-color: lightslategrey;
	}
`

export const Input = styled.input`
	flex-grow: 1;
	padding: 12px 0 12px 20px;
	line-height: 19px;
	font-size: 16px;
	outline: none;
	border: none;

	background-color: lightcoral;

	&[disabled] {
		cursor: not-allowed;
	}

	&[readonly] {
		cursor: pointer;
	}
`

export const InputContainer = styled.div`
	border: 1px solid #333;
	background-color: #fff;
	display: flex;
	align-items: center;
`

export default styled.div`

`
