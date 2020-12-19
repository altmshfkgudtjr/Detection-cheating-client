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

const Network = ({ valid, onChange, fileName }, ref) => {
	const onClick = () => {
		if (!ref.current) return;
		ref.current.click();
	}

	return (
		<RequirementWrapper>
			<RequirementInfo message="Wireshark를 이용한 Pcapng 파일이 필요합니다" />
			<RequirementBody>
				<RequirementBtn color="yellow" message="패킷 업로드" onClick={onClick} />
				<HiddenFile accept=".pcapng" onChange={onChange} ref={ref} />
				<RequirementFileWrapper>
					<RequirementFile fileName={fileName} />
					<RequirementState state={valid} />
				</RequirementFileWrapper>
			</RequirementBody>
		</RequirementWrapper>
	);
}

export default React.forwardRef(Network)