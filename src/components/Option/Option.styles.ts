import styled from 'styled-components'

import { OptionStyledProps } from './Option.d'

export default styled.li<OptionStyledProps>`
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
