import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const RatioWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${palette.gray2};
	margin-bottom: 16px;
`;

export default RatioWrapper