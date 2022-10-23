import styled from 'styled-components'

export const Authentication = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	background-color: #f6f7f6;
	height: 100vh;
`

export const Logo = styled.img`
	height: 100%;
	max-height: 100px;
	margin-bottom: 20px;
	margin: 0 auto;
`

export const P = styled.p`
	font-size: 14px;
	text-align: center;

	a {
		color: var(--color-primary-4);
		text-decoration: none;
	}
`