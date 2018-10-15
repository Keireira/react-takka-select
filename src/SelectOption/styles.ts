import styled from 'styled-components'

import { rgba } from '@helpers'

export default styled.li`
	list-style: none;
	padding: 12px 0 12px 20px;

	cursor: pointer;

	transition: background 0.15s ease;
	background-color: ${rgba('#2f3640', 0.1)};

	&:hover {
		background-color: ${rgba('#fbc531', 0.6)};
	}
`
