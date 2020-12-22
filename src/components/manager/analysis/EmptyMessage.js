import React from 'react'
import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import media from 'lib/styles/media'

const EmptyMessage = ({ message }) => {
	return (
		<Container>
			<Content>{message}</Content>
		</Container>
	);
}

const Container = styled.div`
	height: 210px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Content = styled.div`
	color: ${palette.gray4};

	${media.small} {
		font-size: 14px;
	}
`;

export default EmptyMessage