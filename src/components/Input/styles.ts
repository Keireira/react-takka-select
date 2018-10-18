import styled from 'styled-components'

export default styled.input`
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
