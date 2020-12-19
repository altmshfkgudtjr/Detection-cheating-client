import React from 'react'
import styled from 'styled-components'

const MiniModalLoadingWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, .1);
	backdrop-filter: blur(10px);
	z-index: 10;
`;

export default MiniModalLoadingWrapper