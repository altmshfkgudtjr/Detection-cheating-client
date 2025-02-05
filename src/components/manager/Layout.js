import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Layout = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	display: flex;
	gap: 20px;
	min-height: calc(100vh - 81px - 100px);
	padding: 50px 20px 20px 20px;

	${media.small} {
		gap: 0px;
		padding: 0 0 40px 0;
		min-height: 100vh;
		overflow-x: hidden;
	}
`;

export default Layout