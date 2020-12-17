import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'

const Copyright = () => {
	return <Btn>© 긍정행위, 2020 All Rights Reserved.</Btn>;
}

const Btn = styled.span`
	font-size: 14px;
	color: ${palette.gray5};
`;

export default Copyright