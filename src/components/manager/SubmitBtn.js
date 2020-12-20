import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const SubmitBtn = ({ color, message, onClick }) => {
	return <Btn color={color} onClick={onClick}>{message}</Btn>;
}

const Btn = styled.button`
	width: 160px;
	height: 48px;
	color: white;
	padding: 0;
	border-radius: 12px;
	background-color: ${props => palette[props.color]};

	&:hover {
		filter: brightness(.95);
	}
`;

export default SubmitBtn