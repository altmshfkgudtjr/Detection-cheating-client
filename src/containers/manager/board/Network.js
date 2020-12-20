import React from 'react'
import { useSelector } from 'react-redux'
// components
import IconWrapper from 'components/manager/network/IconWrapper'
import Icon from 'components/manager/network/Icon'

const Network = () => {
	const student = useSelector(state => state.exam.selected_student);
	const results = !!student && !!student.network_result
		? student.network_result
		: []
	;

	const IconList = results.map(
		(result, idx) => <Icon key={idx} type={result} />
	);

	return (
		<IconWrapper>
			{IconList}
		</IconWrapper>
	);
}

export default Network