import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: fadeIn 0.3s ease-in-out forwards;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`

export const Spinner = styled.div`
	border: 5px solid rgba(255, 255, 255, 0.5);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border-top: 5px solid var(--color-green-4);
	animation: spin 1s ease infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`
