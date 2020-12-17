import React from 'react'
import styled from 'styled-components'

const RequirementBody = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default RequirementBody