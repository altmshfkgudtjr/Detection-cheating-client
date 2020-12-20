import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'
// icon
import { Audio, Network, Video } from 'lib/svg'

const provideMap = {
	audio: Audio,
	network: Network,
	video: Video
};

const AnalysisBox = ({ icon, title, full=false, children }) => {
	const Icon = provideMap[icon] || null;

	return (
		<Container full={full}>
			<Titlewrapper>
				{Icon && <Icon />}
				{title && <Title>{title}</Title>}
			</Titlewrapper>
		</Container>
	);
}

const Container = styled.div`
	min-width: 400px;
	max-width: 800px;
	flex-grow: 1;
	height: 300px;
	background-color: ${palette.white};
	border-radius: 12px;
	box-shadow: ${styles.boxShadow.regular};
	box-sizing: border-box;
	padding: ${props => props.full
		? '0'
		: '20px'
	};

	${media.small} {
		min-width: 100%;
		height: auto;
		min-height: 200px;
	}
`;

const Titlewrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;

	& > svg {
		width: 24px;
		height: 24px;
		fill: ${palette.gray6};
	}

	${media.small} {
		margin-bottom: 10px;

		& > svg {
			width: 20px;
			height: 20px;
		}
	}
`;

const Title = styled.h3`
	margin: 0 0 0 20px;
	font-size: 20px;
	font-weight: 600;
	color: ${palette.gray6};

	${media.small} {
		margin: 0 0 0 10px;
		font-size: 18px;
	}
`;

export default AnalysisBox