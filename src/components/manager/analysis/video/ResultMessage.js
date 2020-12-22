import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const ResultMessage = ({ color, message }) => {
	return <Container color={color}>{message}</Container>;
}

const Container = styled.div`
	font-weight: 600;
	font-size: 14px;
	color: ${props => props.color === 'red'
		? palette.red
		: palette.green
	};
`;

export default ResultMessage