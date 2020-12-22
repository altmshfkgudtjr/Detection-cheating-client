import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// components
import IconWrapper from 'components/manager/analysis/network/IconWrapper'
import Icon from 'components/manager/analysis/network/Icon'
import EmptyMessage from 'components/manager/analysis/EmptyMessage'

const Network = () => {
	const student = useSelector(state => state.exam.selected_student);
	const [empty, setEmpty] = useState(true);
	const results = !!student && !!student.network_result
		? student.network_result
		: []
	;

	useEffect(() => {
		if (!student.network_result) {
			setEmpty(true);
		} else {
			setEmpty(false);
		}
	}, [student]);

	const IconList = results.map(
		(result, idx) => <Icon key={idx} type={result} />
	);

	return (<>
		{!empty && <IconWrapper>
			{IconList}
		</IconWrapper>}
		{!!empty && <EmptyMessage message="네트워크가 존재하지 않습니다." />}
	</>);
}

export default Network