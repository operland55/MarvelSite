import React from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";

const HeaderSearch = styled.div`
	
`;
const HeaderName = styled.div``;
const HeaderTitle = styled.p`
	color: #fff;
	font-size: 15px;
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;
const Title = styled.h5`
	color: #fff;
`;

interface Name {
	title: string;
}
function Header({ title }: Name) {
	return (
		<HeaderSearch>
			<HeaderName>
				<HeaderTitle>Marvel</HeaderTitle>
			</HeaderName>
			<TitleBox>
				<Title>Marvel {title}</Title>
			</TitleBox>
		</HeaderSearch>
	);
}

export default Header;
