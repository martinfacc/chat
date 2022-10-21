import styled from 'styled-components'
import ReactSelectComponent from 'react-select'

export const Field = styled.article`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const Input = styled.input`
	padding: 10px;
	border-radius: 10px;
	border: none;
	background-color: #f5f5f5;
	border: 2px solid transparent;
	width: 100%;

	&.error {
		border: 2px solid var(--color-danger-4);
	}
`

export const Select = styled.select`
	padding: 10px 5px;
	border-radius: 10px;
	border: none;
	background-color: #f5f5f5;
	border: 1px solid transparent;
	width: 100%;

	&.error {
		border: 1px solid var(--color-danger-4);
	}
`

export const ReactSelect = styled(ReactSelectComponent)`
	font-size: 13px;
	color: var(--color-gray);

	.react-select__control {
		border: 2px solid transparent;
		border-radius: 10px;
		background-color: #f5f5f5;
		outline: none;

		&:hover {
			border-color: transparent;
		}
	}

	&.error {
		.react-select__control {
			border: 2px solid var(--color-danger-4);
		}
	}
`

export const Textarea = styled.textarea`
	padding: 10px;
	border-radius: 10px;
	border: none;
	background-color: #f5f5f5;
	border: 1px solid transparent;
	width: 100%;
	resize: none;
`

export const InputFile = styled.div`
	background-color: var(--color-success-4);

	label {
		display: block;
		padding: 5px 10px;
		cursor: pointer;

		svg {
			width: 20px;
			fill: white;
		}
	}

	input {
		display: none;
	}

	&:hover {
		background-color: var(--color-success-3);
	}
`

export const InputWithButton = styled.div`
	display: flex;
	flex-direction: row;

	select,
	input {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	button {
		border-radius: 0px;
	}

	> * {
		&:last-child {
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
		}
	}
`

export const InputWithSvgButton = styled.div`
	display: flex;
	flex-direction: row;

	select,
	input {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	button {
		border-radius: 0px;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			width: 17px;
			fill: white;
		}
	}

	> * {
		&:last-child {
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
		}
	}
`

export const SpanError = styled.span`
	color: var(--color-danger-4);
	font-size: 0.8em;
	font-weight: 600;
`

export const Row = styled.div`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
	gap: 15px;
	width: ${(props) => (props.width ? props.width : '100%')};
`
