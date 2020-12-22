import React from 'react'
import styled from 'styled-components'
// components
import RatioIcon from 'components/manager/analysis/video/RatioIcon'
// lib
import palette from 'lib/styles/palette'
import animations from 'lib/styles/animations'

const Ratio = ({ type, message, ratio }) => {
	return (
		<Container>
			<RatioIcon type={type} />
			<Message>{message}</Message>
			<Gauge ratio={ratio} />
			<RatioNum>{ratio}%</RatioNum>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

const Message = styled.div`
	font-weight: 600;
	width: 50px;
	margin-right: 20px;
	font-size: 14px;
`;

const Gauge = styled.div`
	width: ${props => props.ratio / 2 + '%'};
	background-color: ${palette.blue};
	height: 20px;
	margin-right: 10px;
	border-radius: 4px;
	transform-origin: left;
	animation: 1.2s ${animations.chartBar} ease;
`;

const RatioNum = styled.div`
	font-size: 14px;
`;

export default Ratio