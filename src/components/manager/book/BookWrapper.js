import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const BookWrapper = ({ show, children }) => {
	return (
		<Wrapper>
			<Container show={show}>{children}</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 50px;
	right: 0;
	width: 30vw;
	min-width: 200px;
	max-width: 320px;
	min-height: 750px;
	max-height: 800px;
	margin-right: 40px;
	background-color: ${palette.white};
	box-shadow: ${styles.boxShadow.regular};
	border-radius: 12px;
	transition: .4s ${styles.transition};

	${media.small} {
		position: fixed;
		width: 100vw;
		max-width: 1000px;
		height: 100vh;
		max-height: 100vh;
		top: 0;
		right: ${props => props.show
			? '0px'
			: '-100vw'
		};
		margin-right: 0px;
		border-radius: 12px 0 0 12px;
		z-index: 10;
	}
`;

export default BookWrapper