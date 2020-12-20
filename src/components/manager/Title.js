import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Title = ({ title, info }) => {
	return (
		<Container>
			<MainTitle>{title}</MainTitle>
			<Info>{info}</Info>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 10px;
`;

const MainTitle = styled.div`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 10px;
`;

const Info = styled.div`
	white-space: pre-wrap;
	word-break: keep-all;

	${media.small} {
		font-size: 14px;
	}
`;

export default Title