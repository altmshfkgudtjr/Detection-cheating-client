import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const SubmitBtn = ({ color, message, onClick }) => {
	return <Btn color={color} onClick={onClick}>{message}</Btn>;
}

const Btn = styled.button`
	width: 100%;
	height: 56px;
	line-height: 56px;
	border-radius: 12px;
	border: 1px solid ${palette.gray2};
	transition: .1s ${styles.transition};
	background-color: ${props => palette[props.color]};
	padding: 0;
	color: ${palette.white};
	${styles.noselect};

	&:hover {
		filter: brightness(.95);
	}
`;

export default SubmitBtn