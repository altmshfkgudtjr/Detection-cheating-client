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
			{!full && <Titlewrapper>
				{Icon && <Icon />}
				{title && <Title>{title}</Title>}
			</Titlewrapper>}
			{children}
		</Container>
	);
}

const Container = styled.div`
	min-width: 400px;
	flex-grow: 1;
	height: 300px;
	background-color: ${props => props.full
		? 'black'
		: palette.white
	};
	border-radius: 12px;
	box-shadow: ${styles.boxShadow.regular};
	box-sizing: border-box;
	padding: ${props => props.full
		? '0'
		: '20px'
	};
	overflow: hidden;

	&:nth-child(1) { flex: 2 1 0; }
	&:nth-child(2) { flex: 4 1 auto; position: relative; }
	&:nth-child(3) { flex: 1 1 0; }
	&:nth-child(4) { flex: 1 1 0; }

	${media.small} {
		min-width: 100%;
		height: auto;
		min-height: 160px;

		&:nth-child(1) { flex: 1 1 auto; }
		&:nth-child(2) { flex: 1 1 auto; }
		&:nth-child(3) { flex: 1 1 auto; }
		&:nth-child(4) { flex: 1 1 auto; }
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