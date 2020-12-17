import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const ManagerLogin = ({ onClick }) => {
	return (<>
		<Btn onClick={onClick}>관리자 로그인</Btn>
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
`;

const Bar = styled.span`
	font-size: 14px;
	color: ${palette.gray5};
	margin: 0 1rem;
`;

export default ManagerLogin