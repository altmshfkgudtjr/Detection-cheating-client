import React from 'react'
import styled from 'styled-components'

const BoardLayout = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	min-height: calc(100vh - 81px - 127px - 70px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default BoardLayout