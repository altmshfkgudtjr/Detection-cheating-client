import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const BoardWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	flex: 1;
	min-height: 100%;
	margin: 0 40px;

	${media.small} {
		max-width: 90%;
		margin: 60px auto 0 auto;
	}
`;

export default BoardWrapper