import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const RequirementWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	margin-bottom: 60px;

	${media.small} {
		margin-bottom: 40px;
	}
`;

export default RequirementWrapper