import styled from 'styled-components'

export default styled.li`
	list-style: none;
	padding: 20px;

	cursor: pointer;
	transition: background 0.15s ease;

	&:first-child {
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
	}

	&:last-child {
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	&:hover {
		background-color: #f4f4f4;
	}
`
