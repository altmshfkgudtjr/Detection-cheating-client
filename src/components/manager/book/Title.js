import React from 'react'
import styled from 'styled-components'
// lib
import media from 'lib/styles/media'

const Title = ({ title }) => {
	return <Content>{title}</Content>;
}

const Content = styled.div`
	margin: 30px 20px 0px 20px;
	font-size: 28px;
	font-weight: 600;

	${media.small} {
		font-size: 32px;
		margin: 20px 20px 0px 20px;
	}
`;

export default Title