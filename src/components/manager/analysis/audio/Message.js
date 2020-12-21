import React from 'react'
import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import animations from 'lib/styles/animations'

const Message = ({ message, onClick }) => {
	return <Content onClick={onClick}>{`'${message}'`}</Content>;
}

const Content = styled.div`
	padding-top: 20px;

	@media screen and (min-width: 702px) { 	
		position: absolute;
		width: 100%;
		margin-left: -20px;
		bottom: 0;
		box-sizing: border-box;
		padding: 20px;
		z-index: 1;
		border-radius: 12px 12px 0 0;
		color: white;
		background-color: rgba(0,0,0,.7);
		animation: ${animations.fadeInBottom} .4s ease-in-out;
		transition: .2s ${styles.transition};
		cursor: pointer;
		
		&:active {
			transform: scale(.98, .98);
			background-color: rgba(0,0,0,.4);
		}
	}

`;

export default Message