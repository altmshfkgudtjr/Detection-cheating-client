import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'

const InputId = ({ placeholder, onKeyUp }, ref) => {
	return <Content type="text"
									placeholder={placeholder}
									onKeyUp={onKeyUp}
									maxLength={50}
									autoFocus
									ref={ref} />
}

const Content = styled.input`
	width: 100%;
	height: 56px;
	box-sizing: border-box;
	padding: 0 1rem;
	border-radius: 12px;
	border: 1px solid ${palette.gray2};
	transition: .2s ${styles.transition};
	margin-bottom: 20px;

	&:focus {
		border: 1px solid ${palette.blue};
	}
`;

export default React.forwardRef(InputId)