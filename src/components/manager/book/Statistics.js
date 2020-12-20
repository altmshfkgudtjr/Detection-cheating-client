import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const Statistics = ({ all, pass, nonPass }) => {
	return (
		<Container>
			<Content>총 {all}명</Content>
			<Content>완료 {pass + nonPass}명</Content>
			<Content>통과 {pass}명</Content>
			<Content>불통과 {nonPass}명</Content>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin: 0 20px 20px 20px;

	${media.small} {
		margin: 0 20px 20px 20px;
	}
`;

const Content = styled.span`
	font-size: 14px;
	color: ${palette.gray5};
	cursor: default;
	transition: .2s ${styles.transition};

	&:hover {
		color: ${palette.black};
	}
`;

export default Statistics