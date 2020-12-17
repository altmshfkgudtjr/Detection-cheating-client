import React from 'react'
import styled from 'styled-components'

/*
	text: <string> 타겟 text
	keyword: <string> Bold 처리할 text
*/
const TextBold = ({text='', keyword=''})=> {
	if (keyword === '') {
		return <span>{text}</span>;
	}

	const pattern = new RegExp(`(${keyword})`, 'gi');
	const before = text.split(pattern);
	const after = before.map((p, index) => p.toLowerCase() === keyword.toLowerCase()
								? <Impact key={index}>{keyword}</Impact>
								: <span key={index}>{p}</span>);

	return <>{after}</>;
}

const Impact = styled.span`
	font-weight: 600;
	text-decoration: underline;
	text-underline-position: under;
`;

export default TextBold