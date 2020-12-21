import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

/*
	pass: <boolean>
	start: <number> 시작 비율
	end: <number> 끝 비율
*/
const Zone = ({ pass, start, end, onClick }) => {
	return <Content pass={pass}
									start={start}
									end={end}
									onClick={onClick} />;
}

const Content = styled.div`
	position: absolute;
	top: 0;
	left: ${props => props.start + '%'};
	width: ${props => props.end - props.start + '%'};
	height: 100%;
	background-color: ${props => props.pass
		? palette.green
		: palette.red
	};
	opacity: .1;
	cursor: pointer;
	transition: .2s ${styles.transition};

	&:hover {
		transform: scale(1, 1.1);
		opacity: .3;
	}
`;

export default Zone