import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import MiniModalWrapper from 'components/modal/MiniModalWrapper'
import Title from 'components/modal/reason/Title'
import Textarea from 'components/modal/reason/Textarea'
import SubmitBtn from 'components/modal/certification/SubmitBtn'
import MiniModalLoadingWrapper from 'components/modal/MiniModalLoadingWrapper'
import Loading from 'components/common/Loading'
// modules
import { scoreExam } from 'modules/exam'
import { newSnackbar } from 'modules/snackbar'

const Reason = ({ PreventModalOff, ModalOff }) => {
	const dispatch = useDispatch();
	const student = useSelector(state => state.exam.selected_student);
	const inputRef = useRef(null);
	const mountedRef = useRef(null);
	const [reason, setReason] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		if (!student || !student.student_number) {
			dispatch(newSnackbar("새로고침 후 다시 시도해주세요", "error"));
			return;
		} else if (loading) {
			dispatch(newSnackbar("잠시만 기다려주세요", "error"));
		}

		setLoading(true);
		dispatch(scoreExam(student.student_number, false, reason))
		.then(res => {
			if (!mountedRef.current) return;

			setLoading(false);
			if (res) {
				ModalOff();
			}
		});
	}

	const onKeyUp = (e) => {
		if (!e.target) return;
		if (e.keyCode === 13) {
			// onSubmit();
		} else {
			setReason(e.target.value);
		}
	}

	return (
		<MiniModalWrapper onMouseDown={PreventModalOff} ref={mountedRef}>
			<Title message="사유 적기" />
			<Textarea placeholder="불통과 된 이유를 적어주세요."
								onKeyUp={onKeyUp}
								ref={inputRef} />
			<SubmitBtn color="blue" message="제출하기" onClick={onSubmit} />

			{loading && <MiniModalLoadingWrapper><Loading /></MiniModalLoadingWrapper>}
		</MiniModalWrapper>
	);
}

export default Reason