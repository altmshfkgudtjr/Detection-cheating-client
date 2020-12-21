import React from 'react'
import styled from 'styled-components'

const Video = ({ src }, ref) => {
	return <Content src={src}
									type="video/mp4"
									controls
									ref={ref} />;
}

const Content = styled.video`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background-color: black;
`;

export default React.forwardRef(Video)