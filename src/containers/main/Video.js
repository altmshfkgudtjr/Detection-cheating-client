import React from 'react'
// components
import RequirementWrapper from 'components/main/RequirementWrapper'
import RequirementInfo from 'components/main/RequirementInfo'
import RequirementBody from 'components/main/RequirementBody'
import RequirementBtn from 'components/main/RequirementBtn'
import RequirementFileWrapper from 'components/main/RequirementFileWrapper'
import RequirementState from 'components/main/RequirementState'
import RequirementFile from 'components/main/RequirementFile'

const Video = () => {
	return (
		<RequirementWrapper>
			<RequirementInfo message="음성과 함께 녹화된 웹캠 영상 또는 얼굴 정면 영상이 필요합니다" />
			<RequirementBody>
				<RequirementBtn color="green" message="영상 업로드" />
				<RequirementFileWrapper>
					<RequirementFile fileName={"16011075_김형석.mp4"} />
					<RequirementState state={false} />
				</RequirementFileWrapper>
			</RequirementBody>
		</RequirementWrapper>
	);
}

export default Video