import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const ManagerLogin = ({ onClick, message }) => {
	return (<>
		<Btn onClick={onClick}>{message}</Btn>
		<Bar>|</Bar>
	</>);
}

const Btn = styled.button`
	font-size: 14px;
	color: ${palette.gray5};
	padding: 0;

	&:hover {
		color: ${palette.gray8};
	}

	${media.small} {
		font-size: 12px;
	}
`;

const Bar = styled.span`
	font-size: 14px;
	color: ${palette.gray5};
	margin: 0 1rem;

	${media.small} {
		font-size: 12px;
	}
`;

export default ManagerLogin