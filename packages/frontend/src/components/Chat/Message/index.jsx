import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import { Message, MessageHeader, MessageText } from './styles'

const MessageComponent = (props) => {
	const { message } = props
	const { ago, text, user } = message
	const { name, avatar, me } = user

	const classes = classNames({ fromMe: me })

	return (
		<Message className={classes}>
			<MessageHeader className={classes}>
				<img src={avatar} alt={name} />
				<h3>{name}</h3>
				<span>{ago}</span>
			</MessageHeader>
			<MessageText className={classes}>{text}</MessageText>
		</Message>
	)
}

MessageComponent.propTypes = {
	message: propTypes.object.isRequired,
}

export default MessageComponent
