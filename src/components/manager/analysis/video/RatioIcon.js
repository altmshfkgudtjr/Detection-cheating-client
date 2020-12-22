import React from 'react'
import styled from 'styled-components'
// icons
import { EyeLeft, EyeRight, EyeCenter, EyeBlink } from 'lib/svg'
import palette from 'lib/styles/palette'

const provideMap = {
	left: EyeLeft,
	right: EyeRight,
	center: EyeCenter,
	blink: EyeBlink
}

const RatioIcon = ({ type }) => {
	const Icon = provideMap[type];

	return (
		<IconWrapper>
			<Icon />
		</IconWrapper>
	);
}

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 10px;

	& > svg {
		fill: none;
		stroke: ${palette.gray7};
		width: 24px;
	}
`;

export default RatioIcon