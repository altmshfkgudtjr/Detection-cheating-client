import React from 'react'
// containers
import Certification from 'containers/main/Certification'
import Network from 'containers/main/Network'
import Video from 'containers/main/Video'
// components
import Wrapper from 'components/main/Wrapper'
import HelpBtn from 'components/main/HelpBtn'
import Title from 'components/main/Title'
import SubmitBtn from 'components/main/SubmitBtn'

const Main = () => {
	return (
		<Wrapper> 
			<HelpBtn />
			<Title title="긍정행위"
						 subTitle="당신의 시험, 긍정하신가요?"
						 info={`비대면 시험 환경에서 부정행위를 감지합니다.\n이를 통해, 긍정행위는 올바른 온라인 시험 문화를 만들어갑니다.`} />

			<Certification />
			<Network />
			<Video />

			<SubmitBtn message="제출하기" />
		</Wrapper>
	);
}

export default Main