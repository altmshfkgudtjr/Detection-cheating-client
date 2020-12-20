import React from 'react'
import styled from 'styled-components'
// lib

const ContentWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	margin-bottom: 20px;
`;

export default ContentWrapper