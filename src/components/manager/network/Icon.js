import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'
import media from 'lib/styles/media'

const provideMap = {
	Google: '/icons/google.png',
	Naver: '/icons/naver.png',
	Daum: '/icons/daum.png',
	KaKaoTalk: '/icons/kakao.png',
	Discord: '/icons/discord.png',
	Youtube: '/icons/youtube.png',
	Github: '/icons/github.png',
}

const Icon = ({ type }) => {
	const source = provideMap[type] || '/icons/etc.png';
	return <Content src={source} alt={type} title={type} />;
}

const Content = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 12px;
	box-shadow: ${styles.boxShadow.regular};
	transition: .2s ${styles.transition};
	animation: ${animations.zoomIn} .4s ease-in-out;
	cursor: pointer;

	${media.small} {
		width: 48px;
		height: 48px;
	}

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

export default Icon