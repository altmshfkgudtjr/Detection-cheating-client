import React from 'react'
import styled from 'styled-components'

const RequirementInfo = ({ message }) => {
	return <Content>{message}</Content>;
}

const Content = styled.div`
	font-weight: 600;
	font-size: 18px;
	margin-bottom: 16px;
	word-break: keep-all;
`;

export default RequirementInfo