import React from 'react'
import styled from 'styled-components'
// icon
import { Help } from 'lib/svg'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const HelpBtn = ({ onClick }) => {
	const Icon = Help;

	return (
		<Container>
			<IconWrapper onClick={onClick} title="도움말">
				<Icon />
			</IconWrapper>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	${styles.noselect};
`;

const IconWrapper = styled.div`
	width: 32px;
	height: 32px;
	box-sizing: border-box;
	padding: 4px;
	cursor: pointer;

	& > svg {
		width: 24px;
		height: 24px;
		fill: ${palette.gray2};
		transition: .1s ${styles.transition};
	}

	&:hover {
		& > svg {
			fill: ${palette.gray6};
		}
	}
`;

export default HelpBtn