import React, { useState, useEffect } from 'react'
// components
import IconWrapper from 'components/manager/analysis/network/IconWrapper'
import Icon from 'components/manager/analysis/network/Icon'
import TimeInfo from 'components/manager/analysis/network/TimeInfo'
import EmptyMessage from 'components/manager/analysis/EmptyMessage'

const Network = ({ student }) => {
	const [empty, setEmpty] = useState(true);
	const results = !!student && !!student.network_result
		? student.network_result
		: []
	;

	useEffect(() => {
		if (student.network_result.length === 0) {
			setEmpty(true);
		} else {
			setEmpty(false);
		}
	}, [student]);

	const IconList = results.map(
		(result, idx) => <Icon key={idx} type={result} />
	);

	return (<>
		<TimeInfo start={student.time_range[0]} end={student.time_range[1]} />
		{!empty && <IconWrapper>
			{IconList}
		</IconWrapper>}
		{!!empty && <EmptyMessage message="네트워크가 존재하지 않습니다." />}
	</>);
}

export default Network