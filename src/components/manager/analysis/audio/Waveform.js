import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'

const Waveform = ({ src }) => {
	return <Content src={src} alt="Sound waveform" />;
}

const Content = styled.img`
	width: 100%;
	height: auto;
	${styles.noselect};
`;

export default Waveform