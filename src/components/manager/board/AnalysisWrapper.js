import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const AnalysisWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 20px;

	${media.small} {
		flex-direction: column;
	}
`;

export default AnalysisWrapper