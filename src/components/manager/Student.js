import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import * as styles from 'lib/styles/styles'

const Student = ({ onClick, state, info }) => {
	const stateColor = {
		pass: 'green',
		rejected: 'red',
		notyet: 'yellow'
	};

	return (
		<Container onClick={onClick} color={stateColor[state]}>
			<Comment>분석하기</Comment>
			<Info>{info}</Info>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	height: 50px;
	display: flex;
	align-items: center;
	background-color: ${palette.white};
	border-top: 1px solid ${palette.gray2};
	cursor: pointer;
	transition: .2s ${styles.transition};
	overflow: hidden;

	&:hover {
		background-color: ${palette.gray0};

		& > div {
			margin-left: 30px;
			margin-right: 10px;
		}
	}
	&:active {
		background-color: ${palette.gray2};
	}

	&::before {
		content: '';
		position: absolute;
		width: 12px;
		height: 50px;
		background-color: ${props => palette[props.color]};
		margin-right: 10px;
		z-index: 1;
	}

	&:last-child {
		border-bottom: 1px solid ${palette.gray2};
	}
`;

const Comment = styled.div`
	width: 50px;
	margin-left: -50px;
	margin-right: 20px;
	color: ${palette.blue};
	font-size: 14px;
	font-weight: 600;
	transition: .2s ${styles.transition};
	white-space: nowrap;
`;

const Info = styled.span`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: 0 16px 0 0;
`;

export default Student