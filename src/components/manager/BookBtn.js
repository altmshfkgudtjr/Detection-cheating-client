import React from 'react'
import styled from 'styled-components'
// icons
import { Menu, Close } from 'lib/svg'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const provideMap = {
	menu: Menu,
	close: Close
}

const BookBtn = ({ icon, onClick }) => {
	const Icon = provideMap[icon] || provideMap.menu;

	return (
		<Btn onClick={onClick}>
			<Icon />
		</Btn>
	);
}

const Btn = styled.button`
	display: none;
	position: absolute;
	right: 10px;
	top: 10px;
	width: 40px;
	height: 40px;
	padding: 0;

	& > svg {
		width: 24px;
		height: 24px;
		fill: ${palette.gray4};
		transition: .2s ${styles.transition};
	}

	&:hover,
	&:active {
		& > svg {
			fill: ${palette.red};
		}
	}

	${media.small} {
		display: block;
	}
`;

export default BookBtn