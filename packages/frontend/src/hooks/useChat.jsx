import React from 'react'
import ChatContext from '@/contexts/chatContext'

const useChat = () => {
	const { state, setState, currentChat, setChats } =
		React.useContext(ChatContext)

	const sendMessage = (text) => {
		const message = {
			text,
			userFromId: currentChat.me,
			userToId: currentChat.other,
			timestamp: Date.now(),
		}

		setChats((chats) => {
			const chat = chats[currentChat.id] || []
			return {
				...chats,
				[currentChat.id]: [...chat, message],
			}
		})
	}

	return { state, setState, sendMessage }
}

export default useChat
