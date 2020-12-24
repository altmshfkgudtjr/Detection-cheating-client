import React, { useState, useEffect } from 'react'
// components
import RatioWrapper from 'components/manager/analysis/video/RatioWrapper'
import Ratio from 'components/manager/analysis/video/Ratio'
import ResultMessage from 'components/manager/analysis/video/ResultMessage'
import EmptyMessage from 'components/manager/analysis/EmptyMessage'

const Video = ({ student }) => {
	const [empty, setEmpty] = useState(true);


	useEffect(() => {
		if (student.eye_result === '0') {
			setEmpty(true);
		} else {
			setEmpty(false);
		}
	}, [student]);

	return (<>
		{!empty && <>
			<RatioWrapper>
				<Ratio type="left" message="왼쪽" ratio={student.eye_ratio.left} />
				<Ratio type="right" message="오른쪽" ratio={student.eye_ratio.right} />
				<Ratio type="center" message="중앙" ratio={student.eye_ratio.center} />
				<Ratio type="blink" message="깜빡임" ratio={student.eye_ratio.blink} />
			</RatioWrapper>
			
			{Number(student.eye_result) && <ResultMessage color="green" message="비디오 분석 통과하였습니다." />}
			{!Number(student.eye_result) && <ResultMessage color="red" message="비디오 분석 불통과하였습니다. 영상을 확인해주세요." />}
		</>}
		
		{!!empty && <EmptyMessage message="영상이 존재하지 않습니다." />}
	</>);
}

export default Video