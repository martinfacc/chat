import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Login = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
`

export const Form = styled.form`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Anchor = styled(Link)`
	width: 100%;
	font-size: 14px;
	text-align: center;
	color: var(--color-primary-4);
	text-decoration: none;

	&:hover {
		color: var(--color-primary-3);
	}
`
