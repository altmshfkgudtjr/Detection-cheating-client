import React from 'react'
import styled from 'styled-components'

const Waveform = ({ src }) => {
	return <Content src={src} alt="Sound waveform" />;
}

const Content = styled.img`
	width: 100%;
	height: auto;
`;

export default Waveform