import React from "react";
import styled, { keyframes } from "styled-components";
import { Title } from "./Components/Element";

const Start = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
	position: relative;
`;

function Loading() {
	return (
		<Start>
			<Title>Marvel</Title>
		</Start>
	);
}

export default Loading;
