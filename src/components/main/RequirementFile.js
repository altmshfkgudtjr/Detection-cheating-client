import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const RequirementFile = ({ fileName }) => {
	const message = fileName || fileName.length !== 0
		? fileName
		: '업로드가 필요합니다';
	return <Content>{message}</Content>;
}

const Content = styled.div`
	text-align: right;
	color: ${palette.gray5};
	font-size: 14px;
	line-height: 32px;
	margin: 0 1rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	${media.small} {
		margin: 0 .5rem 0 1rem;
	}
`;

export default RequirementFile