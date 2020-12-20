import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// containers
import ReasonModal from 'containers/modal/Reason'
// components
import BoardWrapper from 'components/manager/BoardWrapper'
import BoardLayout from 'components/manager/BoardLayout'
import Title from 'components/manager/Title'
import AnalysisWrapper from 'components/manager/AnalysisWrapper'
import AnalysisBox from 'components/manager/AnalysisBox'
import SubmitBtnWrapper from 'components/manager/SubmitBtnWrapper'
import SubmitBtn from 'components/manager/SubmitBtn'
// modules
import { scoreExam } from 'modules/exam'
import { pushModal } from 'modules/modal'
import { newSnackbar } from 'modules/snackbar'

const Board = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const targetStudent = useSelector(state => state.exam.selected_student);
	const manager_value = useSelector(state => state.auth.manager_value);
	const [loading, setLoading] = useState(false);
	
	const onPass = () => {
		if (!targetStudent) {
			dispatch(newSnackbar("먼저 학생을 선택해주세요", "error"));
			return;
		} else if (loading) {
			dispatch(newSnackbar("잠시만 기다려주세요", "error"));
		} else {
			setLoading(true);
			dispatch(scoreExam(targetStudent.student_number, true, ''))
			.then(() => {
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
			console.log("Logined");
		} else {
			dispatch(newSnackbar("관리자 인증을 먼저 해주세요", "warning"));
			// history.push('/');
		}
	}, [dispatch, manager_value, history]);

	return (
		<BoardWrapper>
			<Title title="부정행위 검토"
						 info={`우측 메뉴을 통해서 특정 학생의 시험데이터를 검토할 수 있습니다.\n검토를 완료한 뒤, 통과 여부를 결정해주세요.`} />
			<BoardLayout>
				<AnalysisWrapper>
					<AnalysisBox icon="network" title="네트워크 분석" />
					<AnalysisBox icon="audio" title="오디오 분석" />
					<AnalysisBox icon="video" title="비디오 분석" />
					<AnalysisBox full={true} />
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