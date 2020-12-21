import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	height: calc(100% - 48px);
	display: flex;
	align-items: center;

	${media.small} {
		height: 120px;
	}
`;

export default Wrapper