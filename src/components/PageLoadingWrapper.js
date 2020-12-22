import React from 'react'
import styled from 'styled-components'

const PageLoadingWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, .1);
	backdrop-filter: blur(10px);
	z-index: 10;
`;

export default PageLoadingWrapper