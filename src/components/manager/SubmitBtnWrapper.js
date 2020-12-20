import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const SubmitBtnWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;

	${media.small} {
		margin-top: 30px;
		justify-content: center;
	}
`;

export default SubmitBtnWrapper