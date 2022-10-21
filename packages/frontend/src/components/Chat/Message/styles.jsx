import styled from 'styled-components'

export const Message = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	padding: 10px;

	&.fromMe {
		align-items: flex-end;
	}
`

export const MessageHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 10px;

	&.fromMe {
		justify-content: end;
		flex-direction: row-reverse;
	}

	span {
		font-size: 14px;
	}

	h3 {
		font-size: 18px;
	}

	img {
		border-radius: 50%;
		width: 45px;
		height: 45px;
	}
`

export const MessageText = styled.p`
	font-size: 14px;
	background-color: var(--color-purple-7);
	padding: 10px 20px;
	border-radius: 10px;

	&.fromMe {
		background-color: var(--color-green-7);
		align-self: flex-end;
	}
`
