import styled from 'styled-components'

export const Button = styled.button`
	padding: 10px;
	border-radius: 10px;
	border: none;
	color: #fff;
	cursor: pointer;
`

export const ButtonPrimary = styled(Button)`
	background-color: var(--color-primary-4);

	&:hover {
		background-color: var(--color-primary-3);
	}
`

export const ButtonSecondary = styled(Button)`
	background-color: var(--color-secondary-4);

	&:hover {
		background-color: var(--color-secondary-3);
	}
`

export const ButtonSuccess = styled(Button)`
	background-color: var(--color-success-4);

	&:hover {
		background-color: var(--color-success-3);
	}
`

export const ButtonDanger = styled(Button)`
	background-color: var(--color-danger-4);

	&:hover {
		background-color: var(--color-danger-3);
	}
`

export const ButtonWarning = styled(Button)`
	background-color: var(--color-warning-4);

	&:hover {
		background-color: var(--color-warning-3);
	}
`

export const ButtonInfo = styled(Button)`
	background-color: var(--color-info-4);

	&:hover {
		background-color: var(--color-info-3);
	}
`
