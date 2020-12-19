import React from 'react'
import styled from 'styled-components'
// icon
import { Check } from 'lib/svg'
// lib
import * as styles from 'lib/styles/styles'
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const RequirementState = ({ state }) => {
	const Icon = Check;

	return (
		<IconWrapper state={state}>
			<Icon />
		</IconWrapper>
	);
}

const IconWrapper = styled.div`
	width: 32px;
	height: 32px;
	box-sizing: border-box;

	& > svg {
		width: 32px;
		height: 32px;
		fill: ${props => props.state
			? palette.green
			: palette.gray2
		};
		transition: .3s ${styles.transition};
	}

	${media.small} {
		padding: 4px;

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export default RequirementState