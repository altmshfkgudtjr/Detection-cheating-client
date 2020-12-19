import React from 'react'
// components
import RequirementWrapper from 'components/main/RequirementWrapper'
import RequirementInfo from 'components/main/RequirementInfo'
import RequirementBody from 'components/main/RequirementBody'
import RequirementBtn from 'components/main/RequirementBtn'
import RequirementFileWrapper from 'components/main/RequirementFileWrapper'
import RequirementState from 'components/main/RequirementState'
import RequirementFile from 'components/main/RequirementFile'
import HiddenFile from 'components/main/HiddenFile'

const Video = ({ valid, onChange, fileName }, ref) => {
	const onClick = () => {
		if (!ref.current) return;
		ref.current.click();
	}

	return (
		<RequirementWrapper>
			<RequirementInfo message="음성과 함께 녹화된 웹캠 영상 또는 얼굴 정면 영상이 필요합니다" />
			<RequirementBody>
				<RequirementBtn color="green" message="영상 업로드" onClick={onClick} />
				<HiddenFile accept=".mp4" onChange={onChange} ref={ref} /> {/* or "video/*" */}
				<RequirementFileWrapper>
					<RequirementFile fileName={fileName} />
					<RequirementState state={valid} />
				</RequirementFileWrapper>
			</RequirementBody>
		</RequirementWrapper>
	);
}

export default React.forwardRef(Video)