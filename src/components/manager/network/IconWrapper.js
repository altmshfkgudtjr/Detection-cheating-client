import React from 'react'
import styled from 'styled-components'

const IconWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

export default IconWrapper