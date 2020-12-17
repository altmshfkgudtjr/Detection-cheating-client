import React, { useState } from 'react'
// components
import MiniModalWrapper from 'components/modal/MiniModalWrapper'
import InputId from 'components/modal/certification/InputId'
import InputPw from 'components/modal/certification/InputPw'
import SubmitBtn from 'components/modal/certification/SubmitBtn'

const Certification = ({ PreventModalOff, ModalOff }) => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	// TODO: 인증 API 만들기
	// TODO: ID, PW Chekcer 만들기
	const onCertify = () => {
		console.log(id, pw);
	}

	const onKeyUpId = (e) => {
		if (!e.target) return;
		setId(e.target.value);
	}

	const onKeyUpPw = (e) => {
		if (!e.target) return;
		setPw(e.target.value);
	}

	return (
		<MiniModalWrapper onMouseDown={PreventModalOff}>
			<InputId placeholder="세종대학교 포털 ID" onKeyUp={onKeyUpId} />
			<InputPw placeholder="암호" onKeyUp={onKeyUpPw} />
			<SubmitBtn color="sejong" message="인증" onClick={onCertify} />
		</MiniModalWrapper>
	);
}

export default Certification