import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const BookWrapper = ({ show, children }) => {
	return <Container show={show}>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	right: 0;
	width: 30vw;
	max-width: 320px;
	border-radius: 12px;
	background-color: ${palette.white};
	box-shadow: ${styles.boxShadow.regular};
	transition: .4s ${styles.transition};

	${media.small} {
		position: absolute;
		width: 100vw;
		max-width: 1000px;
		top: 0;
		height: 100vh;
		right: ${props => props.show
			? '0px'
			: '-100vw'
		};
		top: 0;
		border-radius: 12px 0 0 12px;
		z-index: 10;
	}
`;

export default BookWrapper