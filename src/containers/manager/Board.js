import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// containers
import ReasonModal from 'containers/modal/Reason'
import Network from 'containers/manager/analysis/Network'
import Audio from 'containers/manager/analysis/Audio'
import Video from 'containers/manager/analysis/Video'
// components
import BoardWrapper from 'components/manager/board/BoardWrapper'
import BoardLayout from 'components/manager/board/BoardLayout'
import Title from 'components/manager/Title'
import AnalysisWrapper from 'components/manager/board/AnalysisWrapper'
import AnalysisBox from 'components/manager/board/AnalysisBox'
import SubmitBtnWrapper from 'components/manager/SubmitBtnWrapper'
import SubmitBtn from 'components/manager/SubmitBtn'
import PreviewVideo from 'components/manager/analysis/PreviewVideo'
// modules
import { scoreExam, getStudentList } from 'modules/exam'
import { pushModal } from 'modules/modal'
import { newSnackbar } from 'modules/snackbar'

const Board = ({ onToggleLoading }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const targetStudent = useSelector(state => state.exam.selected_student);
	const manager_value = useSelector(state => state.auth.manager_value);
	const [loading, setLoading] = useState(false);
	const videoRef = useRef(null);
	
	const onPass = () => {
		if (!targetStudent) {
			dispatch(newSnackbar("먼저 학생을 선택해주세요", "error"));
			return;
		} else if (loading) {
			dispatch(newSnackbar("제출 중입니다", "error"));
		} else {
			onToggleLoading(true);
			setLoading(true);
			dispatch(scoreExam(targetStudent.student_number, true, ''))
			.then(() => {
				onToggleLoading(false);
				setLoading(false);
			});
		}
	}

	const onNonPass = () => {
		if (!targetStudent) {
			dispatch(newSnackbar("먼저 학생을 선택해주세요", "error"));
			return;
		} else {
			dispatch(pushModal('REASON', ReasonModal));
		}
	}

	useEffect(() => {
		if (manager_value) {
			dispatch(getStudentList());
		} else {
			dispatch(newSnackbar("관리자 인증을 먼저 해주세요", "warning"));
			history.push('/');
		}
	}, [dispatch, manager_value, history]);

	return (
		<BoardWrapper>
			<Title title="부정행위 검토"
						 info={`우측 메뉴을 통해서 특정 학생의 시험데이터를 검토할 수 있습니다.\n검토를 완료한 뒤, 통과 여부를 결정해주세요.`} />
			<BoardLayout>
				<AnalysisWrapper>
					<AnalysisBox icon="network" title="네트워크 분석">
						<Network/>
					</AnalysisBox>
					<AnalysisBox icon="audio" title="오디오 분석">
						<Audio videoRef={videoRef} />
					</AnalysisBox>
					<AnalysisBox icon="video" title="비디오 분석">
						<Video />
					</AnalysisBox>
					<AnalysisBox full={true}>
						<PreviewVideo src={targetStudent.video_path}
													ref={videoRef} />
					</AnalysisBox>
				</AnalysisWrapper>
				
				<SubmitBtnWrapper>
					<SubmitBtn color="blue" message="통과" onClick={onPass} />
					<SubmitBtn color="red" message="불통과" onClick={onNonPass} />
				</SubmitBtnWrapper>
			</BoardLayout>
		</BoardWrapper>
	);
}

export default Board