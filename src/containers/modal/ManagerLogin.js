import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// components
import MiniModalWrapper from 'components/modal/MiniModalWrapper'
import InputId from 'components/modal/certification/InputId'
import InputPw from 'components/modal/certification/InputPw'
import SubmitBtn from 'components/modal/certification/SubmitBtn'
import MiniModalLoadingWrapper from 'components/modal/MiniModalLoadingWrapper'
import Loading from 'components/common/Loading'
// lib
import * as authUtils from 'lib/utils/authUtils'
// modules
import { managerLogin } from 'modules/auth'
import { newSnackbar } from 'modules/snackbar'

const ManagerLogin = ({ PreventModalOff, ModalOff }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const idRef = useRef(null);
	const pwRef = useRef(null);
	const mountedRef = useRef(null);
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [loading, setLoading] = useState(false);

	const onCertify = () => {
		let value = false;
		const idState = authUtils.validationIdChecker(id);
		const pwState = authUtils.validationIdChecker(pw);
		
		switch (idState.type) {
			case 'EMPTY':
				dispatch(newSnackbar("아이디를 입력해주세요", "error"));
				if (idRef.current) {
					idRef.current.focus();
				}
				break;
			case 'BLANK':
				dispatch(newSnackbar("아이디란에 공백을 제거해주세요", "error"));
				if (idRef.current) {
					idRef.current.focus();
				}
				break;
			case 'TOO_LONG':
				dispatch(newSnackbar("아이디 길이가 너무 깁니다", "error"));
				if (idRef.current) {
					idRef.current.focus();
				}
				break;
			default:
				value = true;
		}

		if (!value) return;
		else value = false;

		switch (pwState.type) {
			case 'EMPTY':
				dispatch(newSnackbar("암호를 입력해주세요", "error"));
				if (pwRef.current) {
					pwRef.current.focus();
				}
				break;
			case 'TOO_LONG':
				dispatch(newSnackbar("암호 길이가 너무 깁니다", "error"));
				if (pwRef.current) {
					pwRef.current.focus();
				}
				break;
			default:
				value = true;
		}

		if (!value) return;
		else value = false;

		setLoading(true);
		dispatch(managerLogin(id, pw))
		.then(res => {
			if (!mountedRef.current) return;
			setLoading(false);
			ModalOff();
			
			if (res) {
				history.push('/manager');
			}
		});
	}

	const onKeyUpId = (e) => {
		if (!e.target) return;
		if (e.keyCode === 13) {
			onCertify();
		} else {
			setId(e.target.value);
		}
	}

	const onKeyUpPw = (e) => {
		if (!e.target) return;
		if (e.keyCode === 13) {
			onCertify();
		} else {
			setPw(e.target.value);
		}
	}

	return (
		<MiniModalWrapper onMouseDown={PreventModalOff} ref={mountedRef}>
			<InputId placeholder="관리자 ID" onKeyUp={onKeyUpId} ref={idRef} />
			<InputPw placeholder="암호" onKeyUp={onKeyUpPw} ref={pwRef} />
			<SubmitBtn color="blue" message="인증" onClick={onCertify} />
		
			{loading && <MiniModalLoadingWrapper><Loading /></MiniModalLoadingWrapper>}
		</MiniModalWrapper>
	);
}

export default ManagerLogin