import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const Wrapper = ({ children }) => {
	return (
		<Container>
			<Content>
				{children}
			</Content>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	min-height: calc(100vh - 160px);
	margin: 80px auto 40px auto;
	background-color: ${palette.white};
	border-radius: 16px;
	box-shadow: ${styles.boxShadow.regular};

	${media.small} {
		margin: 20px auto 40px auto;
	}
`;

const Content = styled.div`
	width: 90%;
	max-width: 720px;
	margin: auto;
	padding: 120px 0;
	transition: .4s ${styles.transition};

	${media.small} {
		padding: 40px 0;
	}
`;

export default Wrapper