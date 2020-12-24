import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

const Copyright = () => {
	return <Btn>© NB, 2020 All Rights Reserved.</Btn>;
}

const Btn = styled.span`
	font-size: 14px;
	color: ${palette.gray5};

	${media.small} {
		font-size: 12px;
	}
`;

export default Copyright