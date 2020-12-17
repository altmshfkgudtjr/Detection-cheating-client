import React from 'react'
// components
import RequirementWrapper from 'components/main/RequirementWrapper'
import RequirementInfo from 'components/main/RequirementInfo'
import RequirementBody from 'components/main/RequirementBody'
import RequirementBtn from 'components/main/RequirementBtn'
import RequirementFileWrapper from 'components/main/RequirementFileWrapper'
import RequirementState from 'components/main/RequirementState'
import RequirementFile from 'components/main/RequirementFile'

const Network = () => {
	return (
		<RequirementWrapper>
			<RequirementInfo message="Wireshark를 이용한 Pcapng 파일이 필요합니다" />
			<RequirementBody>
				<RequirementBtn color="yellow" message="패킷 업로드" />
				<RequirementFileWrapper>
					<RequirementFile fileName={""} />
					<RequirementState state={false} />
				</RequirementFileWrapper>
			</RequirementBody>
		</RequirementWrapper>
	);
}

export default Network