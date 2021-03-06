import styled from 'styled-components'

export const Body = styled.div`
	position: relative;

	color: #2f3640;
	font-size: 16px;
	line-height: 19px;
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
