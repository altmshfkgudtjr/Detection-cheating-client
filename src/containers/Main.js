import React, { useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// containers
import Certification from 'containers/main/Certification'
import Network from 'containers/main/Network'
import Video from 'containers/main/Video'
// components
import Wrapper from 'components/main/Wrapper'
import HelpBtn from 'components/main/HelpBtn'
import Title from 'components/main/Title'
import SubmitBtn from 'components/main/SubmitBtn'
import MiniModalLoadingWrapper from 'components/modal/MiniModalLoadingWrapper'
import Loading from 'components/common/Loading'
import LoadingMessage from 'components/main/LoadingMessage'
// modules
import { newSnackbar } from 'modules/snackbar'
import { submitExam } from 'modules/exam'

const Main = () => {
	const dispatch = useDispatch();
	const networkInputRef = useRef(null);
	const videoInputRef = useRef(null);
	const [pcapngName, setPcapngName] = useState("");
	const [videoName, setVideoName] = useState("");
	const [pcapngFile, setPcapngFile] = useState(null);
	const [videoFile, setVideoFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const studentAuth = useSelector(state => state.auth.auth);

	const onHelp = () => {
		dispatch(newSnackbar(`※ 사용 가이드라인 ※\n\n\n● Wireshark 프로그램이 필요해요!\n\n● 불필요한 모든 응용 프로그램을 종료해주세요!\n\n● 반드시 화면을 정면을 바라봐주세요!\n\n● 잡음이 녹음되지 않도록 주의하세요!\n\n● 영상 확장자가 mp4인지 확인해주세요!\n\n\n긍정행위는 당신의 시험의 합격을 기원합니다.\n\n`, "info"));
	}

	const onSubmit = useCallback(() => {
		if (!!studentAuth.id && !!pcapngFile && !!videoFile) {
			setLoading(true);
			// TODO: id, pw 인증 절차를 JWT로 바꾸기
			dispatch(submitExam(studentAuth.id, studentAuth.pw, pcapngFile, videoFile))
			.then(() => {
				setLoading(false);
			});
		} else if (!studentAuth.id) {
			dispatch(newSnackbar("학생 인증을 먼저 해주세요", "error"));
		} else if (!pcapngFile) {
			dispatch(newSnackbar("패킷을 업로드 해주세요", "error"));
		} else if (!videoFile) {
			dispatch(newSnackbar("영상을 업로드 해주세요", "error"));
		}
	}, [dispatch, studentAuth, pcapngFile, videoFile]);

	const onChangeNetwork = () => {
		const target = networkInputRef.current;
		if (!target) return;
		
		const file = target.files.length === 0 ? null : target.files[0];
		if (!file) return;

		setPcapngFile(target.files[0]);
		setPcapngName(target.files[0].name);
	}

	const onChangeVideo = () => {
		const target = videoInputRef.current;
		if (!target) return;
		
		const file = target.files.length === 0 ? null : target.files[0];
		if (!file) return;

		setVideoFile(target.files[0])
		setVideoName(target.files[0].name);
	}

	return (
		<Wrapper> 
			<HelpBtn onClick={onHelp} />
			<Title title="Detection-Cheating"
						 subTitle="당신의 시험, 긍정하신가요?"
						 info={`비대면 시험 환경에서 부정행위를 감지합니다.\n이를 통해, Detection-Cheating은 올바른 온라인 시험 문화를 만들어갑니다.`} />

			<Certification valid={studentAuth} />
			<Network valid={!!pcapngFile} onChange={onChangeNetwork} fileName={pcapngName}
							 ref={networkInputRef} />
			<Video valid={!!videoFile} onChange={onChangeVideo} fileName={videoName}
						 ref={videoInputRef} />

			<SubmitBtn message="제출하기" onClick={onSubmit} />
			
			{loading && <MiniModalLoadingWrapper>
				<Loading />
				<LoadingMessage message="업로드 중입니다" />
			</MiniModalLoadingWrapper>}
		</Wrapper>
	);
}

export default Main