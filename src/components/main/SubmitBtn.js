import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const SubmitBtn = ({ message, onClick }) => {
	return <Btn onClick={onClick}>{message}</Btn>;
}

const Btn = styled.button`
	width: 100%;
	height: 64px;
	line-height: 64px;
	font-size: 16px;
	background-color: ${palette.blue};
	padding: 0;
	margin-top: 60px;
	border-radius: 16px;
	transition: .2s ${styles.transition};
	color: ${palette.white};
	${styles.noselect};
	
	${media.small} {
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		border-radius: 12px;
		margin-top: 40px;
	}

	&:hover {
		filter: brightness(.95);
	}
`;

export default SubmitBtn