import styled from 'styled-components'

export const Chat = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 700px;
`

export const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	width: 100%;
	max-height: 500px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
		height: 15px;
		background-color: #f3f6f9;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #7e8299;
		border: 1px solid #eff2f5;
	}
`
