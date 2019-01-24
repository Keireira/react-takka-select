import styled from 'styled-components'

export const InputComp = styled.input`
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

export const Wrapper = styled.div`
	display: flex;
	align-items: center;

	background-color: #fff;
	padding-right: 10px;

	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
