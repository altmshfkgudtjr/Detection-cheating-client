import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// containers
import ManagerLoginModal from 'containers/modal/ManagerLogin'
// components
import ManagerLogin from 'components/common/ManagerLogin'
import Copyright from 'components/common/Copyright'
// modules
import { pushModal } from 'modules/modal'
import { setLogout } from 'modules/auth'
import { newSnackbar } from 'modules/snackbar'

const Footer = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const manager_value = useSelector(state => state.auth.manager_value);

	const onLogin = () => {
		dispatch(pushModal('MANAGERLOGIN', ManagerLoginModal));
	}

	const onLogout = () => {
		dispatch(setLogout());
		dispatch(newSnackbar("정상적으로 로그아웃 되었습니다.", "success"));
		history.push('/');
	}

	return (
		<Container>
			{!manager_value && <ManagerLogin onClick={onLogin} message="관리자 로그인" />}
			{manager_value && <ManagerLogin onClick={onLogout} message="로그아웃" />}
			<Copyright />			
		</Container>
	);
}

const Container = styled.div`
	margin: 0 auto 60px auto;
	text-align: center;
`;

export default Footer