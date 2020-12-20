import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'

const Textarea = ({ placeholder, onKeyUp }, ref) => {
	return <Content placeholder={placeholder}
									onKeyUp={onKeyUp}
									maxLength={500}
									autoFocus
									ref={ref} />
}

const Content = styled.textarea`
	width: 100%;
	height: 200px;
	box-sizing: border-box;
	padding: 1rem;
	border-radius: 12px;
	border: 1px solid ${palette.gray2};
	transition: .2s ${styles.transition};
	margin-bottom: 20px;
	resize: none;

	&:focus {
		border: 1px solid ${palette.blue};
	}

	&::-webkit-scrollbar {
		width: 6px;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #ddd;
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #ccc;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;

export default React.forwardRef(Textarea)