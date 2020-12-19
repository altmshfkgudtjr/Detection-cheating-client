import React from 'react'
import styled from 'styled-components'

const HiddenFile = ({ accept, onChange }, ref) => {
	return <Input type="file"
								onChange={onChange}
								accept={accept}
								multiple={false}
								ref={ref} />;
}

const Input = styled.input`
	position: absolute;
	width: 0px;
	height: 0px;
	bottom: 0;
	right: 0;
	opacity: 0;
`;

export default React.forwardRef(HiddenFile)