import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import animations from 'lib/styles/animations'

const TimeInfo = ({ start, end }) => {
	return (
		<Container>
			<Info>{start}</Info>
			<Line />
			<Info>{end}</Info>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	${styles.noselect};
`;

const Info = styled.div`
	font-size: 14px;
	line-height: 20px;
	color: ${palette.gray4};
`;

const Line = styled.div`
	position: relative;
	width: 30%;
	max-width: 400px;
	height: 2px;
	background-color: ${palette.blue};
	margin: 0 10px;
	animation: 1.4s ${animations.timeExtend};

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: -9px;
		width: 2px;
		height: 20px;
		background-color: ${palette.blue};
	}

	&::after {
		content: '';
		position: absolute;
		right: 0;
		top: -9px;
		width: 2px;
		height: 20px;
		background-color: ${palette.blue};
	}
`;

export default TimeInfo