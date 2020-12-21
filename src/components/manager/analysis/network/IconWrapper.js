import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const IconWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	${media.small} {
		gap: 16px;
		& > div {
			flex: 1;
		}
	}
`;

export default IconWrapper