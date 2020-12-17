import React from 'react'
import { useDispatch } from 'react-redux'
// containers
import CertificationModal from 'containers/modal/Certification'
// components
import RequirementWrapper from 'components/main/RequirementWrapper'
import RequirementInfo from 'components/main/RequirementInfo'
import RequirementBody from 'components/main/RequirementBody'
import RequirementBtn from 'components/main/RequirementBtn'
import RequirementState from 'components/main/RequirementState'
// modules
import { pushModal } from 'modules/modal'

const Certification = () => {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(pushModal('CERTIFICATION', CertificationModal));
	}

	return (
		<RequirementWrapper>
			<RequirementInfo message="세종대학교 구성원 인증이 필요합니다" />
			<RequirementBody>
				<RequirementBtn color="red" message="학생 인증" onClick={onClick} />
				<RequirementState state={false} />
			</RequirementBody>
		</RequirementWrapper>
	);
}

export default Certification