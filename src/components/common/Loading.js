import React from 'react'
import styled from 'styled-components'
// lib
import animations from 'lib/styles/animations'
import palette from 'lib/styles/palette'

const Loading = () => {
	return (
		<Container>
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
		</Container>
	);
}

const Container = styled.div`
	width: 200px;
	overflow: hidden;
`;

const Bar = styled.div`
	width: 100%;
	height: 6px;
	margin-left: 100px;
	border-radius: 6px;
	background-color: ${palette.red};
	margin-bottom: 10px;
	transform: scaleX(0);
	animation: 4s infinite ease-in-out ${animations.loading};

	&:nth-child(0) { animation-delay: 0s; }
	&:nth-child(1) { animation-delay: 0.6s; }
	&:nth-child(2) { animation-delay: 0.2s; }
	&:nth-child(3) { animation-delay: 0.8s; }
	&:nth-child(4) { animation-delay: 0.4s; }
	&:nth-child(5) { animation-delay: 0.7s; }
	&:nth-child(6) { animation-delay: 0.3s; }
	&:nth-child(3n - 1) { background-color: ${palette.yellow}; }
	&:nth-child(3n) { background-color: ${palette.blue}; }
	&:nth-child(6n) { background-color: ${palette.green}; }
`;

export default Loading