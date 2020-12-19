import React from 'react'
import styled from 'styled-components'

const BoardWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	flex: 1;
	min-height: 100%;
`;

export default BoardWrapper