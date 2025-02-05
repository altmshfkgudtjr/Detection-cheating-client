import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
// modules
import { popModal, deleteModal } from 'modules/modal'
// lib
import zIndex from 'lib/styles/zIndex'
import animations from 'lib/styles/animations'

const Modal = ()=> {
	const dispatch = useDispatch();
	const modalList = useSelector(state => state.modal.modalList);
	const show = modalList.length !== 0;
	
	const PreventModalOff = e => e.stopPropagation();

	const onMouseDown = (id) => {
		dispatch(deleteModal(id));
	}

	const ModalList = modalList.map(modal => {
		const Content = modal['elem'];
		return <Content key={modal['id']}
										PreventModalOff={PreventModalOff}
										ModalOff={() => { onMouseDown(modal['id']) }}
										args={modal['args']} />;
	});

	useEffect(() => {
		if (show) {
			document.querySelector('body').style.overflow = 'hidden';
		} else {
			document.querySelector('body').removeAttribute('style');
		}
	}, [show]);

	return (
		<>
			{show && <ModalBackground onMouseDown={() => { dispatch(popModal()) }}>
				{ModalList}
			</ModalBackground>}
		</>
	);
}

const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, .16);
	backdrop-filter: blur(8px);
	z-index: ${zIndex.modal};
	animation: ${animations.fadeIn} .4s;
`;

export default Modal