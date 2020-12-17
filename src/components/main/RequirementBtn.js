import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const RequirementBtn = ({ color, message, onClick }) => {
	return <Btn onClick={onClick} color={color}>{message}</Btn>;
}

const Btn = styled.button`
	width: 160px;
	height: 48px;
	line-height: 48px;
	font-size: 16px;
	background-color: ${props => palette[props.color]};
	padding: 0;
	border-radius: 12px;
	transition: .2s ${styles.transition};
	color: ${palette.white};
	
	${media.small} {
		width: 120px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}

	&:hover {
		filter: brightness(.95);
	}
`;

export default RequirementBtn