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
	margin-right: 40px;
	right: 0;
	width: 30vw;
	max-width: 320px;
	border-radius: 12px;
	background-color: ${palette.white};
	box-shadow: ${styles.boxShadow.regular};
	transition: .4s ${styles.transition};
	overflow-x: hidden;
	overflow-y: overlay;

	${media.small} {
		position: absolute;
		width: 100vw;
		max-width: 1000px;
		height: 100vh;
		top: 0;
		right: ${props => props.show
			? '0px'
			: '-100vw'
		};
		margin-right: 0px;
		border-radius: 12px 0 0 12px;
		z-index: 10;
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

export default BookWrapper