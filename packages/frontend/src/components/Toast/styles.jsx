import styled from 'styled-components'

export const Toast = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 10px 20px;
	border-radius: 10px;
	color: white;

	animation: slideOut 0.3s ease-in-out forwards;
	animation-delay: ${({ duration }) => duration - 300}ms;

	svg {
		width: 20px;
		height: 20px;
		fill: white;
	}

	span {
		color: currentColor;
		width: 15ch;
	}

	button {
		color: currentColor;
		font-size: 20px;
		background: none;
		border: none;
		cursor: pointer;
	}

	&.success {
		background: var(--color-green-4);
	}

	&.error {
		background: var(--color-red-4);
	}

	&.warning {
		background: var(--color-yellow-4);
	}

	&.info {
		background: var(--color-purple-4);
	}

	@keyframes slideOut {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-100%);
			opacity: 0;
		}
	}
`
