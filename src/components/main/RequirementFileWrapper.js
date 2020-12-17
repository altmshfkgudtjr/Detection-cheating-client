import React from 'react'
import styled from 'styled-components'

const RequirementFileWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	justify-content: flex-end;
`;

export default RequirementFileWrapper