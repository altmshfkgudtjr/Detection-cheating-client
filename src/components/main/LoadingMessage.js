import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const LoadingMessage = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	font-weight: 600;
	${styles.noselect};
`;

export default LoadingMessage