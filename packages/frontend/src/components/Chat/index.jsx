import React from 'react'
import { Chat, MessageContainer } from './styles'
import Message from './Message'
import TextBox from './TextBox'
import messages from './data.js'

const ChatComponent = () => {
	return (
		<Chat>
			<MessageContainer>
				{messages.map((message, index) => (
					<Message key={index} message={message} />
				))}
			</MessageContainer>
			<TextBox />
		</Chat>
	)
}

export default ChatComponent
