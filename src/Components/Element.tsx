import styled, { keyframes } from "styled-components";
const MoveTitle = keyframes`
	0%{	
		opacity: 0.1;
		bottom: 0%;
	}
	100%{
		bottom: 45%;
		opacity: 1;
		
	}
`;
export const Title = styled.h1`
	font-family: "Fascinate", cursive;
	font-size: 5rem;
	color: #fff;
	position: absolute;
	bottom: 45%;
	left: 45%;
	transform: translate(-50%, 50%);
	animation: ${MoveTitle} 2s ease-in;
`;
