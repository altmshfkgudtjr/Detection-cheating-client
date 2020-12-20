import React from 'react'
import styled from 'styled-components'

const Title = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	font-weight: 600;
	font-size: 32px;
	margin-bottom: 10px;
`;

export default Title