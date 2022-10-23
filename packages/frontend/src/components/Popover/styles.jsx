import styled from 'styled-components'

export const PopoverContainer = styled.div`
	position: relative;
`

export const Popover = styled.div`
	cursor: default;
	z-index: 1;
	position: absolute;
	padding: 10px;
	width: max-content;
	background-color: white;
	border-radius: 10px;
	/* box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%); */
	border: 2px solid #f3f6f9;
	display: none;

	&.is-open {
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: center;
	}
`
