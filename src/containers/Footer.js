import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// containers
import ManagerLoginModal from 'containers/modal/ManagerLogin'
// components
import ManagerLogin from 'components/common/ManagerLogin'
import Copyright from 'components/common/Copyright'
// modules
import { pushModal } from 'modules/modal'

const Footer = () => {
	const dispatch = useDispatch();
	const manager_value = useSelector(state => state.auth.manager_value);

	const onClick = () => {
		dispatch(pushModal('MANAGERLOGIN', ManagerLoginModal));
	}

	return (
		<Container>
			{!manager_value && <ManagerLogin onClick={onClick} />}
			<Copyright />			
		</Container>
	);
}

const Container = styled.div`
	margin: 0 auto 60px auto;
	text-align: center;
`;

export default Footer