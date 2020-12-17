import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'

const MiniModalWrapper = ({ onMouseDown, children }) => {
	return <Container onMouseDown={onMouseDown}>{children}</Container>;
}

const Container = styled.div`
	position: absolute;
	width: 100%;
	max-width: 500px;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	padding: 40px 40px 20px 40px;
	box-sizing: border-box;
	border-radius: 16px 16px 0 0;
	background-color: ${palette.white};
	box-shadow: ${styles.boxShadow.regular};
	animation: ${animations.fadeInBottom} .4s;
	transition: .2s ${styles.transition};

	${media.small} {
		padding: 40px 20px 10px 20px;
	}
`;

export default MiniModalWrapper