import React from 'react'
import styled from 'styled-components'
// components
import TextBold from 'components/common/TextBold'
import media from 'lib/styles/media'

const Title = ({ title, subTitle, info }) => {
	const Bold = <TextBold text={info} keyword={title} />;

	return (
		<Container>
			<SubTitle>{subTitle}</SubTitle>
			<MainTitle>{title}</MainTitle>
			<Info>{Bold}</Info>
		</Container>
	);
}

const Container = styled.div`
	margin-top: -32px;
	margin-bottom: 120px;
`;

const SubTitle = styled.h2`
	margin-top: 0;
	margin-bottom: 4px;
	font-size: 18px;

	${media.small} {
		font-size: 18px;
	}
`;

const MainTitle = styled.h1`
	font-size: 52px;
	margin-top: 0;
	margin-bottom: 50px;
	font-weight: 600;

	${media.small} {
		font-size: 48px;
	}
`;

const Info = styled.h3`
	margin: 0;
	white-space: pre-wrap;
	word-break: keep-all;
`;

export default Title