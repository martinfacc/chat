import React from 'react'
import { TextBox, Textarea } from './styles'
import { ButtonPrimary } from '@/styles/Button'
import useChat from '@/hooks/useChat'

const TextBoxComponent = () => {
	const { sendMessage } = useChat()

	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target
		const formData = new FormData(form)
		const text = formData.get('text')
		sendMessage(text)
		form.reset()
	}

	return (
		<TextBox onSubmit={handleSubmit}>
			<Textarea name="text" placeholder="Type your message here..." />
			<ButtonPrimary type="submit">Send</ButtonPrimary>
		</TextBox>
	)
}

export default TextBoxComponent
