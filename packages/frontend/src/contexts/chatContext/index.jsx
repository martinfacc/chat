import React, { useState } from 'react'
import propTypes from 'prop-types'

const ChatContext = React.createContext({})

export const ChatContextProvider = (props) => {
	const { children } = props
	const [state, setState] = useState(null)
	const [chats, setChats] = useState(null)
	const [currentChat, setCurrentChat] = useState(null)

	const values = React.useMemo(() => {
		return {
			state,
			setState,
			chats,
			setChats,
			currentChat,
			setCurrentChat,
		}
	}, [state, chats, currentChat])

	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

ChatContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default ChatContext
